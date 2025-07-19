import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  delay
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-white/10 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-white/60">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};