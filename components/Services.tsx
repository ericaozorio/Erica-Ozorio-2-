import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Target, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Identidade Visual Atemporal",
    description: "Design de marcas que resistem ao tempo. Do logotipo ao receituário, cada detalhe é pensado para o público de alto valor.",
    icon: <PenTool size={28} />,
    colSpan: "md:col-span-2 md:row-span-2",
    variant: "dark"
  },
  {
    id: 2,
    title: "Websites de Alta Conversão",
    description: "Interfaces focadas na jornada do paciente para credibilidade instantânea e agendamentos fluídos.",
    icon: <Layout size={24} />,
    colSpan: "md:col-span-2",
    variant: "light"
  },
  {
    id: 3,
    title: "Curadoria Social",
    description: "Templates minimalistas para feeds profissionais.",
    icon: <Target size={24} />,
    colSpan: "md:col-span-1",
    variant: "outline"
  },
  {
    id: 4,
    title: "Direção de Arte",
    description: "Curadoria visual para ensaios e posicionamento.",
    icon: <ShieldCheck size={24} />,
    colSpan: "md:col-span-1",
    variant: "accent"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">O que ofereço</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6 italic text-primary">Soluções Estratégicas</h2>
          <div className="w-24 h-px bg-primary mx-auto opacity-10"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`
                rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group transition-all duration-300
                ${service.colSpan}
                ${service.variant === 'dark' ? 'bg-primary text-secondary shadow-xl shadow-primary/20' : ''}
                ${service.variant === 'light' ? 'bg-[#FDFBF9] text-primary shadow-sm border border-primary/5' : ''}
                ${service.variant === 'outline' ? 'bg-white text-primary border border-primary/10' : ''}
                ${service.variant === 'accent' ? 'bg-sky/20 text-primary border border-sky/30' : ''}
              `}
            >
              {/* Background Glow for Dark Variant */}
              {service.variant === 'dark' && (
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>
              )}

              <div className="relative z-10">
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300
                  ${service.variant === 'dark' ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary'}
                  ${service.variant === 'accent' ? 'bg-sky/40 text-primary' : ''}
                `}>
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-serif mb-4 italic leading-tight">
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${service.variant === 'dark' ? 'opacity-70' : 'opacity-60'}`}>
                  {service.description}
                </p>
              </div>

              {service.variant === 'dark' && (
                <button className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-widest font-bold mt-12 hover:text-sky transition-colors w-fit group-btn">
                  Explorar serviço <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};