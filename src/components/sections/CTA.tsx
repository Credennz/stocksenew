import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const CTA = () => {
  const { openGetStarted, openScheduleDemo } = useModal();

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary/50 backdrop-blur-lg rounded-3xl p-12 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Join thousands of satisfied customers who have already taken control of their finances
              with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton onClick={openGetStarted}>
                Get Started Now <ArrowRight className="w-4 h-4 ml-2 inline" />
              </PrimaryButton>
              <button 
                onClick={openScheduleDemo}
                className="text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors"
              >
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};