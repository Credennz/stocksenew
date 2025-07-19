import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

interface SuccessPopupProps {
  onClose: () => void;
  message: string;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 relative max-w-md w-full"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-primary-dark/50 hover:text-primary-dark"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <ArrowRight className="w-8 h-8 text-green-500" />
          </motion.div>
          <h2 className="text-2xl font-bold text-primary mb-2">Request Received!</h2>
          <p className="text-primary-dark/70">{message}</p>
        </div>
      </motion.div>
      <div 
        className="fixed inset-0 bg-black/50 -z-10"
        onClick={onClose}
      />
    </motion.div>
  );
};