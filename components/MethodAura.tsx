import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { n: "01", title: "Imersão & Diagnóstico", desc: "Mergulho profundo na essência do seu trabalho e mapeamento dos desejos do seu público-alvo." },
  { n: "02", title: "Arquitetura da Marca", desc: "Construção da fundação estratégica. Definimos a voz, o tom e os arquétipos do seu posicionamento." },
  { n: "03", title: "Criação Autoral", desc: "Design desenhado do zero, traduzindo conceitos abstratos em elementos visuais de luxo." },
  { n: "04", title: "Lançamento Premium", desc: "Entrega técnica impecável dos arquivos e diretrizes, otimizada para aplicação real." }
];

export const MethodAura: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="metodoaura" className="py-24 md:py-40 px-6 bg-primary text-secondary relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-3 py-1 border border-accent/20 rounded-full text-[10px] uppercase tracking-widest text-accent mb-8"
          >
            Processo Exclusivo
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-8 md:mb-12 leading-none"
          >
            O Método <br /> <span className="text-sky">Aura.</span>
          </motion.h2>
          
          <p className="text-lg md:text-xl text-secondary/60 font-light leading-relaxed mb-12 md:mb-16 w-full md:max-w-md border-l-2 border-accent/20 pl-4 md:pl-6">
            Não é apenas design. É um processo refinado que transforma conhecimento em uma experiência visual de desejo.
          </p>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  p-6 rounded-xl transition-all duration-500 cursor-pointer border
                  ${activeStep === index 
                    ? 'bg-white/5 border-sky/30 lg:translate-x-4' 
                    : 'bg-transparent border-transparent opacity-50 hover:opacity-80 hover:bg-white/5'}
                `}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-2xl font-serif italic ${activeStep === index ? 'text-sky' : 'text-white/20'}`}>
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-lg font-serif mb-1">{step.title}</h4>
                    {activeStep === index && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-white/50 leading-relaxed max-w-sm pt-2"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Abstract Visualization */}
        <div className="h-[400px] md:h-[600px] flex items-center justify-center relative perspective-1000 mt-10 lg:mt-0">
          <motion.div 
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-white/5" />
            <div className="absolute inset-10 rounded-full border border-white/5 border-dashed opacity-30" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            
            {/* Orbiting Elements */}
            <motion.div 
              className="absolute top-0 left-1/2 w-4 h-4 bg-accent rounded-full blur-[2px] shadow-[0_0_20px_rgba(86,124,141,0.5)]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
             <motion.div 
              className="absolute bottom-20 right-10 w-2 h-2 bg-sky rounded-full blur-[1px]"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-64 h-64 md:w-80 md:h-80 bg-white/5 backdrop-blur-2xl rounded-full flex flex-col items-center justify-center p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-50" />
              
              <p className="relative z-10 text-base md:text-lg font-serif italic text-center leading-snug text-white/90">
                "Para que o paciente sinta o valor do seu cuidado, ele precisa ver o valor da sua presença."
              </p>
              
              <div className="relative z-10 mt-6 w-8 h-px bg-sky/50" />
              
              <p className="relative z-10 text-[10px] uppercase tracking-[0.25em] text-sky mt-4 font-sans font-medium">
                Design by Érica
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};