import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Serviços', 'Método Aura', 'Estudos', 'Sobre'];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "py-4 bg-secondary/80 backdrop-blur-xl border-b border-primary/5 shadow-sm" 
            : "py-8 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group relative z-50">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center shadow-lg"
            >
              <Sparkles size={18} />
            </motion.div>
            <span className="text-xl tracking-[0.2em] font-serif uppercase group-hover:text-accent transition-colors">
              Érica Ozorio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-semibold">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className="relative py-2 hover:text-accent transition-colors group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <Button className="!py-3 !px-6 !text-[10px]">Fale Comigo</Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-primary" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            className="fixed inset-0 z-40 bg-secondary flex flex-col p-8 md:hidden justify-center"
          >
            {/* Background Texture */}
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            <nav className="flex flex-col gap-6 items-center relative z-10">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-4xl font-serif italic text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 w-full max-w-xs"
              >
                <Button className="w-full justify-center" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Orçamento
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};