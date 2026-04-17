import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Palette, Anvil, Sliders } from 'lucide-react';

const aspects = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Alta Durabilidade',
    description: 'Tratamentos anticorrosivos e materiais pensados para suportar intempéries 365 dias ao ano.'
  },
  {
    icon: <Palette size={32} strokeWidth={1.5} />,
    title: 'Design Contemporâneo',
    description: 'Linhas minimalistas que dialogam perfeitamente com a arquitetura e paisagismo atuais.'
  },
  {
    icon: <Anvil size={32} strokeWidth={1.5} />,
    title: 'Aço Industrial',
    description: 'O equilíbrio perfeito entre peso, resistência estrutural e facilidade de moldagem.'
  },
  {
    icon: <Sliders size={32} strokeWidth={1.5} />,
    title: 'Personalização',
    description: 'Mobiliários sob medida e adaptações completas para a identidade do seu projeto.'
  }
];

export const Differentials: React.FC = () => {
  return (
    <section className="py-24 bg-textPrimary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-medium text-white mb-4"
          >
            Por que escolher a <span className="text-orange-500 text-glow">URBO</span>?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {aspects.map((aspect, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]">
                {aspect.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{aspect.title}</h3>
              <p className="text-gray-400 font-body leading-relaxed text-sm">
                {aspect.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
