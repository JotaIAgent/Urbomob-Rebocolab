import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bancos',
    filterId: 'bancos',
    category: 'Área Externa',
    image: '/images/prod_banco.png',
    desc: 'Bancos de alta resistência para parques e praças, unindo aço e madeiras tratadas.'
  },
  {
    id: 2,
    name: 'Lixeiras',
    filterId: 'lixeiras',
    category: 'Saneamento Urbano',
    image: '/images/prod_lixeira.png',
    desc: 'Lixeiras com design minimalista, eficientes na coleta e esteticamente agradáveis.'
  },
  {
    id: 3,
    name: 'Mesas e Conjuntos',
    filterId: 'mesas',
    category: 'Convivência',
    image: '/images/prod_mesa.png',
    desc: 'Conjuntos para áreas de piquenique ou food parks, feitos para durar sob qualquer clima.'
  },
  {
    id: 4,
    name: 'Paraciclos',
    filterId: 'paraciclos',
    category: 'Mobilidade',
    image: '/images/prod_paraciclo.png',
    desc: 'Suportes para bicicletas seguros e perfeitamente integrados ao calçamento da cidade.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-textPrimary mb-4">
              Nossa Linha de <span className="text-orange-500">Produtos</span>
            </h2>
            <p className="text-gray-600 font-body text-lg">
              Soluções completas de mobiliário para transformar espaços públicos e corporativos em ambientes memoráveis.
            </p>
          </div>
          <Link to="/produtos" className="hidden md:flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium pb-2 border-b-2 border-transparent hover:border-orange-600 transition-all">
            <span>Ver Catálogo Completo</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={`/produtos?categoria=${product.filterId}`}
                className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-heading font-bold text-textPrimary mb-2 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                    {product.desc}
                  </p>
                  <div className="flex items-center text-orange-600 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 mt-auto">
                    <span>Ver produtos</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/produtos" className="inline-flex items-center space-x-2 text-orange-600 font-medium">
            <span>Ver Catálogo Completo</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
