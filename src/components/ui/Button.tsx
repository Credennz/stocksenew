import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-full font-semibold transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};