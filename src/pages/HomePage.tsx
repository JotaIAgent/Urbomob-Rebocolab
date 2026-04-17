import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Presentation } from '../components/sections/Presentation';
import { Products } from '../components/sections/Products';
import { Differentials } from '../components/sections/Differentials';
import { Projects } from '../components/sections/Projects';
import { CTA } from '../components/sections/CTA';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen font-body selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Products />
        <Differentials />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
