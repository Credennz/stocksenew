import React from 'react';
import { motion } from 'framer-motion';

const partnerships = [
  {
    name: 'Jainam Broking',
    description: 'Strategic partnership for providing advanced algorithmic trading solutions and custom strategies to Jainam Broking clients.',
    logo: 'https://jainambroking.com/images/logo.png'
  },
  {
    name: 'Quantplay',
    description: 'Collaboration on developing cutting-edge quantitative trading strategies and research tools for institutional clients.',
    logo: 'https://quantplay.com/logo.png'
  }
];

export const ExclusivePartnerships = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Exclusive Partnerships
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            Strategic collaborations that enhance our trading capabilities and expand our reach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerships.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-primary/5 rounded-xl p-8"
            >
              <div className="flex items-center gap-6 mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {partner.name}
              </h3>
              <p className="text-primary-dark/70">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};