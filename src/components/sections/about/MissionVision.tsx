import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower traders with cutting-edge technology and personalized strategies for consistent growth.'
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To become the global leader in algorithmic trading solutions and financial empowerment.'
  },
  {
    icon: Heart,
    title: 'Values',
    points: [
      'Transparency in all operations',
      'Innovation in technology',
      'Integrity in business',
      'Customer-first approach'
    ]
  }
];

export const MissionVision = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
              {item.description ? (
                <p className="text-white/80">{item.description}</p>
              ) : (
                <ul className="space-y-2">
                  {item.points?.map((point) => (
                    <li key={point} className="flex items-center text-white/80">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};