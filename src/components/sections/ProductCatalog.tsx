import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import catalogData from '../../data/catalog.json';
import imageScalesData from '../../data/image-scales.json';

// ── Types ──────────────────────────────────────────────
interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  images: string[];
}

// ── Data ───────────────────────────────────────────────
const catalog = catalogData as Record<string, Product>;
const allProducts = Object.values(catalog);
const imageScales = imageScalesData as Record<string, number>;

const CATEGORIES = [
  { id: 'bancos', label: 'Bancos' },
  { id: 'lixeiras', label: 'Lixeiras' },
  { id: 'mesas', label: 'Mesas e conjuntos' },
  { id: 'paraciclos', label: 'Paraciclos e Bicicletários' },
];

// ── Slug parser ────────────────────────────────────────
const TYPE_MAP: Record<string, string> = {
  banco: 'Banco',
  lixeira: 'Lixeira',
  mesa: 'Mesa',
  paraciclo: 'Paraciclo',
};
function parseSlug(slug: string) {
  const parts = slug.split('-');
  const type = TYPE_MAP[parts[0]] || parts[0];
  const model = parts.slice(1).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { type, model };
}

// ── Product Item ───────────────────────────────────────
const ProductItem: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const { model } = parseSlug(product.slug);
  
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/produto/${product.slug}`}
        className="group block relative w-full aspect-[4/3] flex items-center justify-center p-8 overflow-hidden"
      >
        {/* Floating Name on Hover (Design Spell UI) */}
        <div className="absolute inset-0 bg-transparent z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <p className="text-textPrimary font-display font-black text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {model}
          </p>
        </div>

        {/* Image core */}
        <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105 will-change-transform">
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply drop-shadow-md"
              style={{ transform: `scale(${(imageScales[product.slug] || 1) * 1.4})` }}
              loading="lazy"
            />
          ) : (
            <span className="text-gray-300 text-xs">Sem imagem</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

// ── Main Section ────────────────────────────────────────
export const ProductCatalog: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoria = params.get('categoria');
    if (categoria) {
      const el = document.getElementById(categoria);
      if (el) {
        setTimeout(() => {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section id="produtos" className="py-24 bg-[#EBEBEB] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {CATEGORIES.map((cat, catIndex) => {
          const categoryProducts = allProducts.filter((p) => p.category === cat.id);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={cat.id} id={cat.id} className={`${catIndex > 0 ? 'mt-24' : ''}`}>
              
              {/* Categoria Header (like screenshot) */}
              <div className="mb-12 flex flex-col items-start">
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-wide text-textPrimary">
                  PRODUTO: <span className="text-[#F15A24]">{cat.label}</span>
                </h2>
              </div>

              {/* Grid 3-cols */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
                {categoryProducts.map((product, i) => (
                  <ProductItem key={product.slug} product={product} index={i} />
                ))}
              </div>

              {/* Black Line Separator */}
              <div className="w-16 h-1 bg-[#1A1A1A] mt-24"></div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
