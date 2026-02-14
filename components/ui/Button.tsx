import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  icon = false,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 group overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-secondary hover:shadow-2xl hover:shadow-primary/20",
    outline: "border border-primary/20 text-primary hover:border-primary",
    ghost: "text-primary hover:bg-primary/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shine effect for primary button */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      )}
      
      <span className="relative z-20 flex items-center gap-3">
        {children}
        {icon && (
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        )}
      </span>
    </motion.button>
  );
};