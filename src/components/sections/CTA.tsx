import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section id="contato" className="relative py-32 bg-orange-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg fill="none" viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white mb-6 leading-tight">
            Transforme seu espaço <span className="text-black inline-block transform -rotate-2 px-4 bg-white mt-2">urbano</span>
          </h2>
          
          <p className="text-orange-100 text-xl md:text-2xl font-body mb-12 max-w-2xl mx-auto font-light">
            Vamos conversar sobre o seu próximo projeto. Oferecemos consultoria completa para especificar o mobiliário ideal.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="mailto:contato@urbomob.com.br"
              className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="https://wa.me/5519997903528"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded hover:bg-white/10 transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
