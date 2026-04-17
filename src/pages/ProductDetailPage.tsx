import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageSquare, Download, X } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import catalogData from '../data/catalog.json';

// ── Types ──────────────────────────────────────────────
interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  images: string[];
  bottomImage?: string;
}

const catalog = catalogData as Record<string, Product>;
const allProducts = Object.values(catalog);

// ── Standard RAL Color Palette ─────────────────────────
const RAL_COLORS = [
  { code: 'RAL 9005', name: 'Preto Jet', hex: '#0A0A0A' },
  { code: 'RAL 9010', name: 'Branco Puro', hex: '#F5F4EF' },
  { code: 'RAL 1003', name: 'Amarelo Sinaleiro', hex: '#F9A12E' },
  { code: 'RAL 2008', name: 'Laranja Claro Brilhante', hex: '#F36A21' },
  { code: 'RAL 3002', name: 'Vermelho Carmim', hex: '#A12312' },
  { code: 'RAL 5017', name: 'Azul Tráfego', hex: '#006DB3' },
  { code: 'RAL 6005', name: 'Verde Musgo', hex: '#2F4538' },
  { code: 'RAL 7016', name: 'Cinza Antracite', hex: '#383E42' },
  { code: 'RAL 7024', name: 'Cinza Grafite', hex: '#474B4E' },
  { code: 'RAL 7037', name: 'Cinza Pó', hex: '#7D7E7C' },
  { code: 'RAL 7035', name: 'Cinza Claro', hex: '#D7D7D7' },
  { code: 'RAL 9006', name: 'Alumínio Branco', hex: '#A8ABAE', metallic: true },
  { code: 'RAL 9007', name: 'Alumínio Cinza', hex: '#8E8E8E', metallic: true },
];

const CATEGORY_LABELS: Record<string, string> = {
  bancos: 'Bancos',
  lixeiras: 'Lixeiras',
  mesas: 'Mesas e conjuntos',
  paraciclos: 'Paraciclos e Bicicletários',
};

// ── Slug → Title parser ───────────────────────────────
const TYPE_MAP: Record<string, string> = {
  banco: 'Banco',
  lixeira: 'Lixeira',
  mesa: 'Mesa',
  paraciclo: 'Paraciclo',
};

function parseSlug(slug: string): { type: string; model: string } {
  const parts = slug.split('-');
  const typeKey = parts[0];
  const type = TYPE_MAP[typeKey] || parts[0];
  const model = parts
    .slice(1)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return { type, model };
}

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? catalog[slug] : null;
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);
  const [activeHeroImage, setActiveHeroImage] = useState<string | null>(null);

  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveHeroImage(null);
    setActiveModalImage(null);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col font-body bg-[#EBEBEB]">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 pt-32">
          <h1 className="text-3xl font-display font-black uppercase text-textPrimary">Produto não encontrado</h1>
          <Link to="/produtos" className="text-[#F15A24] hover:underline flex items-center gap-2 font-medium">
            <ArrowLeft size={16} /> Voltar ao Catálogo
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getProductSpecs = (p: typeof product) => {
    let materiais = ['Aço carbono'];
    let acabamentos = ['Galvanização', 'Pintura eletrostática'];

    if (p.category === 'bancos') {
       if (p.slug.includes('-wood')) {
          materiais.push('Madeira tratada (Jatobá/Tamarindo)');
          acabamentos.push('Decking Oil (3 demãos)');
       }
    } else if (p.category === 'lixeiras') {
       materiais.push('Cesto interno removível em alumínio ou inox');
    } else if (p.category === 'mesas') {
       materiais.push('Chapa perfurada');
    } else if (p.category === 'paraciclos') {
       materiais.push('Perfil estrutural em aço');
    }
    
    return { materiais, acabamentos };
  };

  const materials = getProductSpecs(product);
  const { type: productType, model: productModel } = parseSlug(product.slug);
  const categoryLabel = CATEGORY_LABELS[product.category] || product.category;

  const displayPhoto = product.images[0]; // Foto de exibição principal (Cutout 3D)
  const measureImage = product.images[product.images.length - 1]; // Planta/Medida (Sempre a última)
  // A galeria de miniaturas deve incluir a própria Capa como primeira opção, indo até a penúltima foto
  const galleryPhotos = product.images.slice(0, -1);

  const whatsappMsg = encodeURIComponent(`Olá! Tenho interesse no produto ${productType} ${productModel}. Poderia me enviar mais informações e orçamento?`);
  const whatsappUrl = `https://wa.me/5519997903528?text=${whatsappMsg}`;

  // Itens Relacionados
  const related = allProducts.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen font-body selection:bg-[#F15A24] selection:text-white bg-white">
      <Navbar />

      <main>
        {/* ── 1. Hero Section: Foto de Exibição ── */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#EBEBEB]">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            
            {/* Breadcrumb Minimalista */}
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-12">
              <Link to="/" className="hover:text-textPrimary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/produtos" className="hover:text-textPrimary transition-colors">Produtos</Link>
              <span>/</span>
              <span className="text-textPrimary font-bold">{productModel}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Info + CTA (col-span-5) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 flex flex-col z-10"
              >
                <div className="mb-8">
                  <p className="text-sm font-bold text-[#F15A24] tracking-widest uppercase mb-2">
                    {categoryLabel}
                  </p>
                  <h1 className="text-5xl md:text-7xl font-display font-black text-textPrimary leading-none uppercase -ml-1">
                    {productModel}
                  </h1>
                  <p className="text-xl font-medium text-gray-500 mt-2 tracking-wide uppercase">
                    {productType}
                  </p>
                </div>

                <div className="w-12 h-1 bg-[#1A1A1A] mb-8"></div>

                <p className="text-textPrimary text-base md:text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Left Side Gallery Thumbnails */}
                {galleryPhotos.length > 0 && (
                  <div className="mb-12">
                     <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Fotos Adicionais</p>
                     <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {galleryPhotos.map((photo, i) => (
                           <button 
                             key={i} 
                             onClick={() => setActiveHeroImage(activeHeroImage === photo ? null : photo)}
                             className={`bg-[#1A1A1A]/5 aspect-square flex items-center justify-center p-2 transition-colors ${activeHeroImage === photo ? 'ring-2 ring-[#F15A24]' : 'hover:bg-[#1A1A1A]/10'}`}
                           >
                             <img 
                               src={photo} 
                               alt={`Miniatura ${i}`} 
                               className="w-full h-full object-contain mix-blend-multiply"
                             />
                           </button>
                        ))}
                     </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#F15A24] text-white py-4 px-8 text-sm font-bold tracking-widest uppercase hover:bg-black transition-colors"
                  >
                    <MessageSquare size={18} />
                    Solicitar Orçamento
                  </a>
                </div>
              </motion.div>

              {/* Display Photo Floating (col-span-7) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                key={activeHeroImage || displayPhoto}
                className="lg:col-span-7 relative flex items-center justify-center lg:h-[700px]"
              >
                {displayPhoto ? (
                  <img
                    src={activeHeroImage || displayPhoto}
                    alt={`${productType} ${productModel}`}
                    // Multiplicador de mistura e escala grande para exaltar a qualidade do 3D ou ambiente
                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl scale-110 lg:scale-125 origin-center"
                    loading="eager"
                  />
                ) : (
                  <div className="text-gray-400">Imagem indisponível</div>
                )}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 2. Specifications & Detail Photos ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Esquerda: Especificações Estritas */}
              <div className="lg:col-span-4 flex flex-col gap-10">
                <div>
                  <h3 className="text-2xl font-display font-black text-textPrimary uppercase mb-6">Especificações</h3>
                  <div className="w-8 h-1 bg-[#F15A24] mb-8"></div>
                </div>

                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Materiais</h4>
                    <ul className="flex flex-col gap-2">
                      {materials.materiais.map((m) => (
                        <li key={m} className="text-base text-textPrimary font-medium">{m}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Acabamentos</h4>
                    <ul className="flex flex-col gap-2">
                      {materials.acabamentos.map((a) => (
                        <li key={a} className="text-base text-textPrimary font-medium">{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Dimensões</h4>
                    <p className="text-base text-textPrimary font-medium">As dimensões precisas e volumes podem ser solicitadas via atendimento técnico para adequação ao projeto.</p>
                  </div>
                </div>
              </div>

              {/* Direita: Fotos de Medidas */}
              <div className="lg:col-span-8">
                {measureImage ? (
                  <div className="h-full bg-[#EBEBEB] aspect-[4/3] flex items-center justify-center p-8 relative group">
                    <button 
                      onClick={() => setActiveModalImage(measureImage)}
                      className="absolute inset-0 w-full h-full z-10 cursor-zoom-in"
                      aria-label="Ampliar medições"
                    />
                    <img 
                      src={measureImage} 
                      alt={`Medidas ${productModel}`} 
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-gray-600 rounded">
                      Clique para ampliar
                    </div>
                  </div>
                ) : (
                  <div className="h-full min-h-[300px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 p-8 text-center bg-gray-50">
                    <p className="font-medium mb-2 uppercase tracking-widest text-xs">Exclusivo URBOMOB</p>
                    <p className="text-sm">Desenho técnico e ambientações em breve.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ── 2.5. Ambientação Inferior (Exclusivo Família Flow ou similar) ── */}
        {product.bottomImage && (
          <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col items-center justify-center gap-4">
              <div className="w-full flex items-center justify-center relative">
                <img
                  src={product.bottomImage}
                  alt={`Família Modular ${productModel}`}
                  className="w-full max-h-[600px] object-contain mix-blend-multiply origin-center hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="flex items-center gap-2 border border-gray-100 bg-gray-50/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm group hover:border-gray-200 transition-colors">
                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Família Modular
                </span>
                <span className="text-[11px] md:text-sm font-display font-black text-[#F15A24] uppercase tracking-wide">
                  {productModel.split(' ')[0]}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* ── 3. Acabamentos Personalizados (Cores RAL) ── */}
        <section className="py-24 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase mb-4">Cores RAL</h3>
                <p className="text-gray-400 max-w-xl text-lg">
                  Oferecemos um padrão rigoroso de paletas estruturais. Todos os produtos estão disponíveis nos tons arquitetônicos fundamentais.
                </p>
              </div>
              <div className="w-16 h-1 bg-[#F15A24]"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-y-10 gap-x-6">
              {RAL_COLORS.map((color) => (
                <button
                  key={color.code}
                  onClick={() => setSelectedColor(color.code === selectedColor ? null : color.code)}
                  className="group flex flex-col items-start gap-4"
                >
                  <div
                    className={`w-full aspect-video transition-transform duration-300 ${
                      selectedColor === color.code
                        ? 'ring-2 ring-offset-4 ring-offset-[#1A1A1A] ring-[#F15A24] scale-105'
                        : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-left">
                    <p className="text-sm font-bold tracking-widest uppercase transition-colors group-hover:text-[#F15A24]">
                      {color.code}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{color.name}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <AnimatePresence>
              {selectedColor && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-12 bg-white/5 border border-white/10 p-6"
                >
                  <p className="text-gray-300 font-medium">
                    Cor em destaque: <strong className="text-white">{selectedColor}</strong> — {RAL_COLORS.find((c) => c.code === selectedColor)?.name}. <br className="hidden md:block"/>
                    Para cores personalizadas ou sob medida, mencione no momento do orçamento.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── 4. Documentos / Blocos 3D ── */}
        <section className="py-24 bg-[#EBEBEB]">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-display font-black text-textPrimary uppercase mb-2">
                Recursos para Arquitetos
              </h3>
              <p className="text-gray-600 font-medium">
                Faça o download dos blocos 3D (SketchUp / DWG) e especificações completas.
              </p>
            </div>
            <button className="flex items-center gap-3 bg-transparent border-2 border-textPrimary text-textPrimary px-8 py-4 font-bold uppercase tracking-widest hover:bg-textPrimary hover:text-white transition-colors">
              <Download size={18} />
              Arquivos do Produto
            </button>
          </div>
        </section>

        {/* ── 5. Catálogo Relacionado ── */}
        {related.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-black text-textPrimary uppercase">
                    Mais <span className="text-[#F15A24]">{categoryLabel}</span>
                  </h3>
                </div>
                <Link
                  to={`/produtos`}
                  className="text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-[#F15A24] transition-colors"
                >
                  Veja a linha completa →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {related.map((p) => {
                  const { model: m } = parseSlug(p.slug);
                  return (
                    <Link
                      key={p.slug}
                      to={`/produto/${p.slug}`}
                      className="group block relative w-full aspect-[4/3] flex items-center justify-center p-8 overflow-hidden bg-[#EBEBEB]"
                    >
                      <div className="absolute inset-0 bg-transparent z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <p className="text-textPrimary font-display font-black text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out uppercase">
                          {m}
                        </p>
                      </div>

                      <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105 will-change-transform">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-contain mix-blend-multiply drop-shadow-md"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ── Modal (Lightbox para as Medidas) ── */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/95 p-4 md:p-12"
            onClick={() => setActiveModalImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setActiveModalImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center bg-white/10 rounded overflow-hidden shadow-2xl backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeModalImage} 
                alt="Detalhe Expandido" 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

