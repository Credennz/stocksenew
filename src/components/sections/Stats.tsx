import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Globe2 } from 'lucide-react';
import { SlidingPartners } from '../ui/SlidingPartners';

const partners = [
  'Angel One',
  'Upstox',
  'Jainam Broking',
  'Quantplay'
];

const stats = [
  {
    icon: Users,
    value: '2M+',
    label: 'Active Users',
    sublabel: '',
    description: 'Trust our platform for their financial needs'
  },
  {
    icon: Building2,
    value: '4+',
    label: 'Exclusive Partners',
    sublabel: '',
    partners: partners
  },
  {
    icon: '',
    img:'survey.png',
    value: '500+',
    label: 'Projects Completed',
    sublabel: '1,200+ Projects Delivered',
    description: 'Turning ideas into reality with precision and expertise'
  }
];

export const Stats = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon && <stat.icon className="w-8 h-8 text-white/80" />}
                {stat.img && (<span><img className='lucide lucide-earth w-8 h-8 text-white/80' src={stat.img} ></img></span>)}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="text-lg font-semibold text-white/90 mb-1">
                {stat.sublabel}
              </div>
              {stat.description && (
                <p className="text-white/70 text-sm mb-2">
                  {stat.description}
                </p>
              )}
              {stat.partners && (
                <div className="mt-4">
                  <SlidingPartners partners={stat.partners} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};