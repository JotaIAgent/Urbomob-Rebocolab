import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProductCatalog } from '../components/sections/ProductCatalog';

export const ProdutosPage: React.FC = () => {
  return (
    <div className="min-h-screen font-body selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
};
