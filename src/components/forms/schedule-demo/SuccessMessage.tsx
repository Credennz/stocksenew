import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface SuccessMessageProps {
  onClose: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className="p-8 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <Calendar className="w-8 h-8 text-green-500" />
      </motion.div>
      <h2 className="text-2xl font-bold text-primary mb-2">Demo Scheduled!</h2>
      <p className="text-primary-dark/70 mb-4">
        We've scheduled your demo session. Check your email for the calendar invite and meeting details.
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