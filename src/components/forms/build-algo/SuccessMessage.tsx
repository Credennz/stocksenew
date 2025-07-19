import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const SuccessMessage = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-8 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <CheckCircle className="w-8 h-8 text-green-500" />
      </motion.div>
      <h2 className="text-2xl font-bold text-primary mb-2">Request Sent!</h2>
      <p className="text-primary-dark/70 mb-4">
        We'll review your request and get back to you within 24-48 hours.
      </p>
      <button
        onClick={onClose}
        className="text-primary hover:text-primary-dark transition-colors"
      >
        Close
      </button>
    </div>
  );
};