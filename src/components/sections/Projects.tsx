import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import catalogData from '../../data/catalog.json';

interface Product {
  images: string[];
}

export const Projects: React.FC = () => {
  const dynamicItems = useMemo(() => {
    // Puxa as capas de todos os produtos do catalogo
    const products = Object.values(catalogData as Record<string, Product>);
    const allHeroImages = products
      .filter((p) => p.images && p.images.length > 0)
      .map((p) => ({ id: Math.random().toString(), image: p.images[0] }));
      
    // Embaralha para ser sempre aleatório a cada load e pega 8 fotos
    const shuffled = allHeroImages.sort(() => Math.random() - 0.5).slice(0, 8);
    
    return [...shuffled, ...shuffled]; // Duplica para o loop infinito perfeito
  }, []);

  const totalItems = dynamicItems.length; // 16
  const baseItemsCount = totalItems / 2;  // 8

  // Calcula os frames de animação ("Sanfona") automaticamente com base na quantidade
  const xFrames = [];
  const timesFrames = [];
  const easesFrames = [];

  for (let i = 0; i <= baseItemsCount; i++) {
    xFrames.push(`-${(i / totalItems) * 100}%`);
    timesFrames.push(i / baseItemsCount);
    if (i < baseItemsCount) {
      easesFrames.push([0.8, 0.0, 0.2, 1.0]);
    }
  }

  return (
    <section id="projetos" className="py-12 bg-white overflow-hidden">
      <div className="w-full px-4 md:px-8"> 
        <div className="text-center w-full mx-auto mb-10 relative z-30">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium text-textPrimary mb-4 whitespace-nowrap">
            Em Foco: <span className="text-orange-500">Catálogo Contínuo</span>
          </h2>
        </div>

        {/* Palco do Telão - Ocupa 100% da largura com Enquadramento (Frame) */}
        <div className="relative w-full h-[35vh] md:h-[45vh] bg-gradient-to-t from-gray-200 to-gray-50 rounded-3xl shadow-2xl border-4 md:border-8 border-neutral-900 overflow-hidden ring-2 ring-neutral-300">
          
          {/* Fundo Estúdio (chão artificial iluminado central) */}
          <div className="absolute -bottom-32 w-[200%] md:w-[150%] left-1/2 -translate-x-1/2 h-1/2 bg-white/90 blur-3xl rounded-[100%] z-0 pointer-events-none"></div>

          {/* O TRUQUE Dinâmico: A fita tem a largura proporcional à quantidade total de itens */}
          <motion.div
            className="flex h-full absolute inset-y-0 left-0 z-10"
            style={{ width: `${totalItems * 100}%` }}
            animate={{ x: xFrames }}
            transition={{
              duration: baseItemsCount * 3.5, // Dinâmico (ex: 8 * 3.5s = 28s de volta completa)
              ease: easesFrames,
              times: timesFrames,
              repeat: Infinity,
            }}
          >
            {dynamicItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="h-full flex flex-col items-center justify-center p-6 md:p-12 relative"
                style={{ width: `${100 / totalItems}%` }}
              >
                <div className="relative h-[110%] sm:h-[120%] w-full flex justify-center items-center">
                  <img 
                    src={item.image} 
                    alt="Produto Urbomob"
                    className="h-full w-auto object-contain drop-shadow-2xl z-10"
                    loading="lazy"
                  />
                  
                  {/* Sombra Dinâmica Independente do PNG */}
                  <div className="absolute -bottom-2 md:-bottom-6 left-1/2 -translate-x-1/2 w-[70%] max-w-lg h-6 md:h-10 bg-black/20 blur-xl rounded-[100%] z-0" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Efeito de reflexo de vidro na tela (Gloss) */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-40 transform -skew-y-3 origin-top-left"></div>
        </div>
      </div>
    </section>
  );
};
