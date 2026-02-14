import React from 'react';
import { GlareCard } from './ui/GlareCard';
import { ArrowUpRight, Sparkles, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  return (
    <section id="estudos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-4 leading-none text-primary">
              Estudos de <br />
              <span className="italic opacity-60">Posicionamento.</span>
            </h2>
          </div>
          <p className="text-sm text-primary/50 uppercase tracking-widest max-w-[200px] leading-relaxed text-right border-r border-primary/20 pr-6">
            Onde a sensibilidade encontra o resultado técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Project 1 */}
          <div className="space-y-6 group">
            <div className="h-[500px] w-full">
              <GlareCard>
                <div className="w-full h-full relative">
                  {/* Background Image could go here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2F4156] to-[#1a2530] z-0" />
                  
                  <div className="relative z-10 p-12 h-full flex flex-col justify-between text-[#F5EFEB]">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 border border-white/10 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Sparkles size={18} className="text-sky" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest opacity-40 font-mono">01 / 24</span>
                    </div>
                    
                    <div className="space-y-4">
                      <motion.div className="overflow-hidden">
                        <h3 className="text-5xl font-serif italic mb-2 transform group-hover:translate-x-2 transition-transform duration-500">Clínica Serenity</h3>
                      </motion.div>
                      <p className="text-sm font-light opacity-60 max-w-xs leading-relaxed border-l border-sky/30 pl-4">
                        Rebranding completo focado em acolhimento e alto ticket para psicologia clínica.
                      </p>
                    </div>
                  </div>
                </div>
              </GlareCard>
            </div>
            
            <div className="flex justify-between items-center px-2">
              <div>
                <h4 className="font-bold text-primary text-sm tracking-widest uppercase">Estratégia & Branding</h4>
                <span className="text-xs text-primary/40">Identidade Visual, Papelaria</span>
              </div>
              <button className="w-12 h-12 border border-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="space-y-6 md:pt-32 group">
            <div className="h-[500px] w-full">
              <GlareCard>
                <div className="w-full h-full relative">
                   <div className="absolute inset-0 bg-gradient-to-bl from-[#3d5a73] to-[#2F4156] z-0" />

                  <div className="relative z-10 p-12 h-full flex flex-col justify-between text-[#F5EFEB]">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 border border-white/10 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center">
                        <MousePointer2 size={18} className="text-sky" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest opacity-40 font-mono">02 / 24</span>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-5xl font-serif italic mb-2 transform group-hover:translate-x-2 transition-transform duration-500">Dra. Beatriz Luz</h3>
                      <p className="text-sm font-light opacity-60 max-w-xs leading-relaxed border-l border-sky/30 pl-4">
                        Website premium com foco em experiência do usuário e agendamento otimizado.
                      </p>
                    </div>
                  </div>
                </div>
              </GlareCard>
            </div>
            
            <div className="flex justify-between items-center px-2">
              <div>
                <h4 className="font-bold text-primary text-sm tracking-widest uppercase">UI/UX Design</h4>
                <span className="text-xs text-primary/40">Web Design, Desenvolvimento</span>
              </div>
              <button className="w-12 h-12 border border-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};