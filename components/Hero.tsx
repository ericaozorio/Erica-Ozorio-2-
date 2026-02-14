import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Utilizando a API de thumbnail com parâmetro de tamanho (sz=w1000) para garantir o carregamento
  const imageUrl = "https://drive.google.com/thumbnail?id=1FksGGF-cmtZ1Lwx7UpyZN90m350SglVc&sz=w1000";

  return (
    <section ref={containerRef} className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div style={{ y: yText, opacity }} className="space-y-10 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 border border-primary/10 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold bg-white/30 backdrop-blur-sm"
          >
            <Zap size={12} className="text-accent" fill="currentColor" /> 
            Designer Visual para profissionais da Saúde
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight text-primary"
          >
            Sua autoridade <br />
            <span className="italic text-accent opacity-90 relative inline-block">
               traduzida em
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
               </svg>
            </span> <br />
            design de luxo.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light text-primary/70 leading-relaxed max-w-lg"
          >
            Ajudo médicas e psicólogas a criarem marcas perenes que transmitem confiança e refinamento desde o primeiro clique.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 pt-6 items-center sm:items-start"
          >
            <Button icon={true}>Solicitar Orçamento</Button>
            <a href="#estudos" className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold border-b border-primary/20 pb-1 hover:text-accent hover:border-accent transition-all mt-3">
              Ver portfólio
              <span className="group-hover:translate-x-1 transition-transform">↓</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Image Composition */}
        <motion.div 
          style={{ y: yImage }}
          className="relative flex items-center justify-center md:justify-end pt-10 md:pt-0 order-1 md:order-2 group/hero"
        >
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full animate-spin-slower" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/5 rounded-full animate-reverse-spin opacity-50" />

          {/* Masked Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[420px] aspect-[3.5/5] overflow-hidden rounded-t-[200px] rounded-b-[10px] shadow-2xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-20 group-hover/hero:bg-transparent transition-colors duration-700" />
            <img 
              src={imageUrl}
              alt="Érica Ozorio"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-110 group-hover/hero:scale-100 transition-transform duration-[1.5s] ease-out grayscale group-hover/hero:grayscale-0"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60 z-10" />
            
            <div className="absolute bottom-6 left-6 z-30 text-secondary">
               <p className="font-serif italic text-2xl">Érica O.</p>
               <p className="text-[10px] uppercase tracking-widest opacity-80">Designer Visual & Estrategista de Marca</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};