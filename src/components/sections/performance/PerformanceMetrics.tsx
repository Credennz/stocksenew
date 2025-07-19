import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, Globe2 } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '₹10 Cr+',
    label: 'Total Profit Generated',
    description: 'Cumulative returns for our clients'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Active Users',
    description: 'Traders using our strategies'
  },
  {
    icon: Building2,
    value: '35%',
    label: 'Monthly Returns',
    description: 'Average monthly performance'
  },
  {
    icon: Globe2,
    value: '99.9%',
    label: 'Success Rate',
    description: 'Strategy execution accuracy'
  }
];

export const PerformanceMetrics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/5 rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-primary-dark mb-1">
                {metric.label}
              </div>
              <p className="text-primary-dark/70 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};