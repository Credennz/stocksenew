import React from 'react';
import { motion } from 'framer-motion';

interface MilestoneProps {
  year: number;
  title: string;
  description: string;
  align: 'left' | 'right';
  delay: number;
}

export const Milestone: React.FC<MilestoneProps> = ({
  year,
  title,
  description,
  align,
  delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex ${align === 'left' ? 'justify-start' : 'justify-end'} relative`}
    >
      <div className={`w-1/2 ${align === 'right' && 'ml-auto'}`}>
        <div className="bg-primary/5 rounded-xl p-6">
          <div className="text-2xl font-bold text-primary mb-2">{year}</div>
          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
          <p className="text-primary-dark/70">{description}</p>
        </div>
      </div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
    </motion.div>
  );
};