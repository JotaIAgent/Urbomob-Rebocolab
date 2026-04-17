import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AboutUs } from '../components/sections/AboutUs';

export const SobrePage: React.FC = () => {
  return (
    <div className="min-h-screen font-body selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};
