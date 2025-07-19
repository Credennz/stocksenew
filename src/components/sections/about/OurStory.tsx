import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from './Milestone';

const milestones = [
  {
    year: 2020,
    title: 'Foundation',
    description: 'Started with a vision to democratize algorithmic trading'
  },
  {
    year: 2021,
    title: 'First Partnership',
    description: 'Strategic alliance with leading brokers'
  },
  {
    year: 2022,
    title: 'Rapid Growth',
    description: 'Expanded user base to 10,000+ traders'
  },
  {
    year: 2023,
    title: 'Innovation',
    description: 'Launched advanced AI-powered trading algorithms'
  }
];

export const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            From a vision to revolutionize trading to becoming a trusted name in algorithmic solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-primary/20"></div>
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <Milestone
                key={milestone.year}
                {...milestone}
                align={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};