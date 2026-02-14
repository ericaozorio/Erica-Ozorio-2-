import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-32 pb-12 px-6 border-t border-primary/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* CTA Section */}
        <div className="text-center mb-32 space-y-10">
          <h2 className="text-5xl md:text-8xl font-serif leading-none italic text-primary">
            Design à altura <br /> da sua trajetória.
          </h2>
          <p className="text-lg text-primary/60 max-w-xl mx-auto font-light">
            Descubra o serviço que melhor funciona para você. Fale comigo para entendermos a sua necessidade e transformar sua autoridade em design de excelência.
          </p>
          <Button className="!px-12 !py-5 !text-sm">Solicitar Orçamento</Button>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-12 border-t border-primary/10 pt-16">
          <div className="col-span-2">
            <span className="text-2xl tracking-[0.2em] font-serif font-light uppercase text-primary">Érica Ozorio</span>
            <p className="mt-6 text-xs text-primary/50 uppercase tracking-[0.2em] font-bold max-w-xs">
              Designer Visual & Estrategista de Marca para a área da saúde.
            </p>
          </div>

          <div>
             <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-30 text-primary">Social</h5>
             <div className="flex flex-col gap-4">
               <a href="https://www.instagram.com/ericaozorio.design" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary/70 hover:text-accent transition-colors group">
                 <Instagram size={18} /> <span className="font-serif italic text-lg group-hover:translate-x-2 transition-transform">@ericaozorio.design</span>
               </a>
               <a href="#" className="flex items-center gap-3 text-primary/70 hover:text-accent transition-colors group">
                 <Linkedin size={18} /> <span className="font-serif italic text-lg group-hover:translate-x-2 transition-transform">LinkedIn</span>
               </a>
               <a href="#" className="flex items-center gap-3 text-primary/70 hover:text-accent transition-colors group">
                 <Mail size={18} /> <span className="font-serif italic text-lg group-hover:translate-x-2 transition-transform">Email</span>
               </a>
             </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-30 text-primary">Menu</h5>
            <nav className="flex flex-col gap-2">
              {['Serviços', 'Método Aura', 'Estudos', 'Sobre'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-primary/70 hover:text-primary transition-colors text-sm font-light">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-primary/30">
          <p>&copy; {new Date().getFullYear()} Érica Ozorio Studio.</p>
          <p>São Paulo — Brasil</p>
        </div>
      </div>
    </footer>
  );
};