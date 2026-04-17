import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/images/hero-plaza.png" 
          alt="Praça orgânica com bancos" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-orange-500 font-heading font-medium tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Design Inovador & Alta Resistência
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none mb-8"
        >
          MOBILIÁRIO <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">URBANO</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#produtos" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-orange-600 hover:bg-orange-700 transition-all rounded shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
          >
            Conheça Nossa Linha
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-orange-500 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

