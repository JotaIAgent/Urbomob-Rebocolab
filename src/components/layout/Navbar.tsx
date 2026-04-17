import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'Produtos', href: '/produtos', type: 'route' },
  { name: 'Sobre', href: '/sobre', type: 'route' },
  { name: 'Contato', href: '/contato', type: 'route' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Oficial URBO */}
        <Link to="/" className="flex items-center">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/YKbNJBE0vLSkvgke/urbo.-2-Yanz1rjD44HxDMeM.png"
            alt="URBO Mobiliário Urbano"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10">
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-orange-500' : 'hover:text-orange-500'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link
            to="/produtos"
            className="bg-textPrimary text-white px-6 py-2.5 text-sm font-medium hover:bg-orange-500 transition-colors"
          >
            Ver Catálogo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-textPrimary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background shadow-lg md:hidden flex flex-col"
          >
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-6 py-4 border-b border-gray-200 text-sm font-medium hover:text-orange-500 hover:bg-gray-50 ${
                    isActive(link.href) ? 'text-orange-500' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-6 py-4 border-b border-gray-200 text-sm font-medium hover:text-orange-500 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <Link
              to="/produtos"
              className="px-6 py-4 bg-orange-500 text-white text-center font-medium"
            >
              Ver Catálogo Completo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
