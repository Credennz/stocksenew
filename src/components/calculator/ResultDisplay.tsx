import React from 'react';
import { motion } from 'framer-motion';

interface ResultDisplayProps {
  amount: number;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ amount }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="text-sm text-primary-dark mb-2">Total Amount</div>
      <motion.div
        key={amount}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-3xl font-bold text-primary"
      >
        ₹{Math.round(amount).toLocaleString()}
      </motion.div>
    </div>
  );
};