import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-textPrimary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Sobre */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/YKbNJBE0vLSkvgke/urbo.-2-Yanz1rjD44HxDMeM.png" 
                alt="URBO Mobiliário Urbano" 
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 font-body leading-relaxed max-w-sm">
              Mobiliário urbano com beleza, elegância, alta resistência e durabilidade. Design que resiste à cidade.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="text-lg font-heading font-medium mb-6">Links Rápidos</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/produtos" className="hover:text-orange-500 transition-colors">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-orange-500 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-orange-500 transition-colors">Contato</Link></li>
              <li><a href="/#projetos" className="hover:text-orange-500 transition-colors">Projetos</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-heading font-medium mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <span>19 9 9790-3528</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <a href="mailto:contato@urbomob.com.br" className="hover:text-white transition-colors">contato@urbomob.com.br</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                <span>Rod. Vicinal, 675-399 Santo Antônio do Jardim&nbsp;-&nbsp;SP CEP: 13995-000</span>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://www.instagram.com/urbomob" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="font-medium text-sm">/urbomob</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} URBO Mobiliário Urbano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
