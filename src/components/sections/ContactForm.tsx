import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Content & Info */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-display font-medium text-textPrimary mb-8 tracking-tighter">
                CONTATO
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-lg mb-12 leading-relaxed">
                Solicitação de orçamentos, informações sobre produtos, sugestões e parcerias.
              </p>

              <div className="space-y-10">
                {/* Contact Item */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <Phone className="text-[#F15A24] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Telefone</h4>
                    <p className="text-2xl font-display text-textPrimary">19 9 9790-3528</p>
                  </div>
                </div>

                {/* Contact Item */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <Mail className="text-[#F15A24] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">E-mail</h4>
                    <p className="text-xl md:text-2xl font-display text-textPrimary">contato@urbomob.com.br</p>
                  </div>
                </div>

                {/* Contact Item */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <MapPin className="text-[#F15A24] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Endereço</h4>
                    <p className="text-lg font-display text-textPrimary max-w-sm leading-snug">
                      Rod. Vicinal, 675-399 <br />
                      Santo Antônio do Jardim&nbsp;—&nbsp;SP <br />
                      CEP 13995-000
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F15A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/urbomob" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-display text-textPrimary hover:text-[#F15A24] transition-colors"
                    >
                      @urbomob
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-3xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Nome</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-gray-200 focus:border-[#F15A24] outline-none px-4 py-4 rounded-xl transition-colors font-body text-textPrimary"
                      placeholder="Seu nome"
                    />
                  </div>
                  {/* Empresa */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-gray-200 focus:border-[#F15A24] outline-none px-4 py-4 rounded-xl transition-colors font-body text-textPrimary"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* E-mail */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">E-mail*</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#F15A24] outline-none px-4 py-4 rounded-xl transition-colors font-body text-textPrimary"
                      placeholder="seu@email.com"
                    />
                  </div>
                  {/* Telefone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Telefone*</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#F15A24] outline-none px-4 py-4 rounded-xl transition-colors font-body text-textPrimary"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Mensagem*</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-white border border-gray-200 focus:border-[#F15A24] outline-none px-4 py-4 rounded-xl transition-colors font-body text-textPrimary resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-textPrimary text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 group overflow-hidden relative"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1">ENVIAR MENSAGEM</span>
                  <Send className="w-4 h-4 relative z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 text-[#F15A24]" />
                  
                  {/* Button Background Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
