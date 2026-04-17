import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Shield, Sparkles, Leaf, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Durabilidade Excepcional',
    description: 'Oferecemos móveis projetados para suportar o uso contínuo e resistir ao desgaste diário da vida urbana com longa vida útil.',
  },
  {
    icon: Sparkles,
    title: 'Design Exclusivo',
    description: 'Transformamos espaços projetando verdadeiras expressões de individualidade e bom gosto, onde os móveis são expressões de estilo e personalidade.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Acreditamos que beleza e responsabilidade caminham juntas, num compromisso inabalável com o respeito ao meio ambiente.',
  },
  {
    icon: Award,
    title: 'Custo-Benefício',
    description: 'Equilíbrio impecável onde você obtém beleza, funcionalidade e durabilidade a preços justos, sem comprometer a qualidade.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-textPrimary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Header Section */}
        <div className="flex flex-col mb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-[#F15A24] text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Nossa Essência
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium leading-[1.1] mb-12">
              O design inovador encontra a  
              <span className="text-[#F15A24]"> durabilidade excepcional.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-6">
                Bem-vindo à URBO. Somos uma empresa especializada na criação e fabricação de móveis urbanos, destacando-nos pela combinação perfeita de aço e outros materiais, resultando em peças únicas que se integram perfeitamente ao seu estilo de projeto.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                Acreditamos que os móveis não são apenas objetos funcionais, mas expressões de estilo e personalidade. Nossa equipe é composta por designers apaixonados e talentosos que buscam constantemente inspiração para criar peças exclusivas que elevam a experiência de viver e trabalhar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-6">
                Comprometemo-nos a oferecer móveis que resistam ao desgaste diário da vida urbana. Nossos produtos são projetados para suportar o uso contínuo, proporcionando não apenas beleza estética, mas também uma longa vida útil. 
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8">
                Explore nosso catálogo e descubra como podemos transformar seu espaço. Na URBO, estamos empenhados em criar uma experiência única para cada cliente, proporcionando móveis que fazem mais do que apenas ocupar espaço — eles contam a sua história.
              </p>
              <p className="text-white font-display font-medium text-xl">
                Bem-vindo ao mundo dos móveis urbanos, <br/><span className="text-[#F15A24]">bem-vindo à URBO.</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-24 max-w-7xl mx-auto" />

        {/* Missão e Valores Core */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#F15A24]/10 rounded-full flex items-center justify-center">
                <Sparkles size={24} className="text-[#F15A24]" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-white">Nossa <span className="text-[#F15A24]">Missão</span></h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              Na Urbo, nossa missão é transcender o ordinário, proporcionando móveis urbanos com design exclusivo que não apenas atendem às necessidades práticas, mas também elevam a estética dos ambientes. Comprometemo-nos a levar beleza e sofisticação para cada espaço, transformando seus projetos em refúgios contemporâneos que refletem a personalidade e o estilo de nossos clientes. Na busca incessante pela inovação e elegância, a Urbo destaca-se como a escolha perfeita para aqueles que buscam móveis que transcendem a função básica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#F15A24]/10 rounded-full flex items-center justify-center">
                <Leaf size={24} className="text-[#F15A24]" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-white">Nossos <span className="text-[#F15A24]">Valores</span></h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              Nossos valores fundamentais são alicerçados na busca constante pelo equilíbrio entre custo-benefício, sustentabilidade e respeito ao meio ambiente. Com um compromisso inabalável com a qualidade acessível, oferecemos móveis urbanos que unem design exclusivo e durabilidade, proporcionando uma relação única de custo e benefício aos nossos clientes. Um estilo de vida consciente e elegante.
            </p>
          </motion.div>
        </div>

        {/* Valores Grid Detail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group border border-white/10 bg-white/5 p-8 hover:border-[#F15A24]/60 hover:bg-[#F15A24]/5 transition-all duration-300 rounded-xl"
            >
              <div className="w-12 h-12 bg-[#F15A24]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F15A24]/20 group-hover:scale-110 transition-all duration-300">
                <item.icon size={22} className="text-[#F15A24]" />
              </div>
              <h4 className="text-white font-display font-bold text-xl mb-3 group-hover:text-[#F15A24] transition-colors">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contato & Fábrica CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="bg-[#111111] border border-white/5 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#F15A24]/0 via-[#F15A24]/5 to-[#F15A24]/0 rotate-45 pointer-events-none transition-transform duration-1000 group-hover:rotate-90"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full">
              {/* Box 1 */}
              <div>
                <p className="text-xs text-[#F15A24] tracking-[0.2em] font-bold uppercase mb-4">Fabricação Própria</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white mb-2 whitespace-nowrap">
                  Santo Antônio do Jardim — SP
                </h3>
                <p className="text-gray-400 font-light">Rod. Vicinal, 675-399 · CEP 13995-000</p>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col md:items-end justify-center">
                <p className="text-xs text-gray-500 tracking-[0.2em] font-bold uppercase mb-4 md:text-right">Fale Conosco</p>
                <p className="text-2xl text-white font-display mb-1">19 99790-3528</p>
                <p className="text-lg text-[#F15A24] font-medium">contato@urbomob.com.br</p>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};
