import React, { useRef } from 'react';

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlareCard: React.FC<GlareCardProps> = ({ children, className = '' }) => {
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const dx = x - 50;
    const dy = y - 50;
    state.current = {
      glare: { x, y },
      background: { x: 50 + x / 4 - 12.5, y: 50 + y / 3 - 16.67 },
      rotate: { x: -(dy / 3.5), y: dx / 3.5 } // Inverted Y for correct tilt feel
    };
    updateStyles();
  };

  return (
    <div
      className={`relative isolate [perspective:1000px] w-full h-full transition-transform duration-500 ease-out hover:scale-[1.02] ${className}`}
      ref={refElement}
      style={{
        "--duration": "300ms",
        "--radius": "12px",
        "--opacity": "0"
      } as React.CSSProperties}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => refElement.current?.style.setProperty("--opacity", "0.6")}
      onPointerLeave={() => {
        refElement.current?.style.setProperty("--opacity", "0");
        refElement.current?.style.setProperty("--r-x", "0deg");
        refElement.current?.style.setProperty("--r-y", "0deg");
      }}
    >
      <div className="h-full w-full rounded-[var(--radius)] transition-transform duration-[var(--duration)] ease-out [transform:rotateY(var(--r-y))_rotateX(var(--r-x))] overflow-hidden border border-white/10 relative bg-primary shadow-2xl shadow-primary/30">
        {children}
        {/* Glare overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[var(--opacity)] transition-opacity bg-[radial-gradient(circle_at_var(--m-x)_var(--m-y),rgba(255,255,255,0.2)_0%,transparent_60%)] mix-blend-overlay z-10" />
      </div>
    </div>
  );
};
