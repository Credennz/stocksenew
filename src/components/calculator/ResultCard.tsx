import React from 'react';
import { motion } from 'framer-motion';

interface ResultCardProps {
  label: string;
  amount: number;
}

export const ResultCard: React.FC<ResultCardProps> = ({ label, amount }) => {
  return (
    <div className="text-center p-4 bg-white rounded-lg">
      <div className="text-sm text-primary mb-1">{label}</div>
      <motion.div
        key={amount}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl font-bold text-primary"
      >
        ₹{Math.round(amount).toLocaleString()}
      </motion.div>
    </div>
  );
};