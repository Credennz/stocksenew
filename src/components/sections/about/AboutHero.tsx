import React from 'react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empowering Traders,<br />Driving Success
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your trusted partner in algorithmic trading and market insights, dedicated to transforming the way you trade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};