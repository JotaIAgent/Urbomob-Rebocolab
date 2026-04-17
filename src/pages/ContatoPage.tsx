import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';

export const ContatoPage: React.FC = () => {
  return (
    <div className="min-h-screen font-body selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
