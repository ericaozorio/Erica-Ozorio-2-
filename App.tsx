import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { MethodAura } from './components/MethodAura';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary text-primary font-sans overflow-x-hidden selection:bg-primary/10">
      
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />

      <Header />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <MethodAura />
      </main>

      <Footer />
    </div>
  );
};

export default App;
