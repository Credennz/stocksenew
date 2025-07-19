import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Award, Building } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Traders Empowered'
  },
  {
    icon: TrendingUp,
    value: '₹50 Cr+',
    label: 'Profits Generated'
  },
  {
    icon: Building,
    value: '3+',
    label: 'Broker Partnerships'
  },
  {
    icon: Award,
    value: '99%',
    label: 'Client Satisfaction'
  }
];

export const Achievements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Achievements</h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {achievement.value}
              </div>
              <div className="text-primary-dark/70">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};