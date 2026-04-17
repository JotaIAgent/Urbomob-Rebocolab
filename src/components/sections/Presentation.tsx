import React from 'react';
import { motion } from 'framer-motion';

export const Presentation: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block border border-orange-200 bg-orange-50 px-3 py-1 rounded-full text-orange-600 text-xs font-bold tracking-widest uppercase mb-2">
              A Empresa
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-textPrimary">
              Design que <br/>
              <span className="text-orange-500">resiste</span> à cidade.
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed max-w-xl">
              Somos especializados na criação e fabricação de móveis urbanos, combinando design inovador com durabilidade excepcional. Pensamos o mobiliário não apenas como funcional, mas como expressão de estilo e personalidade para projetos arquitetônicos.
            </p>
            
            <div className="pt-4 flex gap-8">
              <div>
                <span className="block text-4xl font-display font-bold text-textPrimary mb-1">Beleza</span>
                <span className="text-sm text-gray-500 font-medium">Estática</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-textPrimary mb-1">Alta</span>
                <span className="text-sm text-gray-500 font-medium">Durabilidade</span>
              </div>
            </div>
          </motion.div>

          {/* Imagens Deslizando (Stack) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 relative h-[500px] w-full"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              className="absolute top-0 right-0 w-3/4 h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-2xl z-20"
            >
              <img 
                src="/images/minimalist_bench_detail.png" 
                alt="Detalhe mobiliário banco" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ x: -10 }}
              className="absolute bottom-0 left-0 w-2/3 h-[300px] bg-gray-200 rounded-lg overflow-hidden shadow-xl z-30 border-4 border-white"
            >
              <img 
                src="/images/corporate_courtyard.png" 
                alt="Ambiente externo corporativo" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
