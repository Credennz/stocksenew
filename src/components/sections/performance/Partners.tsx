import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'Angel One',
  'Upstox',
  'Jainam Broking'
];

export const Partners = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-white/70">Proud partners with industry leaders</p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center min-h-[120px] w-full"
            >
              <span className="text-white font-semibold text-lg text-center">{partner}</span>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};