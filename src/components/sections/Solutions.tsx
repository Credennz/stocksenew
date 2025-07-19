import React from 'react';
import { motion } from 'framer-motion';
import { 
  Binary, 
  LineChart, 
  PiggyBank, 
  TrendingUp, 
  Wallet, 
  BarChart2 
} from 'lucide-react';
import { SolutionCard } from '../ui/SolutionCard';

const solutions = [
  {
    icon: Binary,
    title: 'Algorithmic Trading',
    description: 'Automated trading strategies powered by advanced algorithms and machine learning.',
    features: [
      'High-frequency trading capabilities',
      'Custom strategy development',
      'Real-time market analysis',
      'Risk management systems'
    ]
  },
  {
    icon: LineChart,
    title: 'Investment Management',
    description: 'Professional portfolio management with data-driven investment decisions.',
    features: [
      'Portfolio optimization',
      'Asset allocation',
      'Risk assessment',
      'Performance tracking'
    ]
  },
  {
    icon: PiggyBank,
    title: 'Financial Planning',
    description: 'Comprehensive financial planning services for long-term wealth creation.',
    features: [
      'Goal-based planning',
      'Retirement planning',
      'Tax optimization',
      'Estate planning'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Trading Solutions',
    description: 'Advanced trading platforms and tools for professional traders.',
    features: [
      'Multi-market access',
      'Advanced charting',
      'Order management',
      'Real-time analytics'
    ]
  },
  {
    icon: Wallet,
    title: 'Wealth Management',
    description: 'Holistic wealth management services for high-net-worth individuals.',
    features: [
      'Personalized strategies',
      'Multi-asset portfolios',
      'Regular rebalancing',
      'Wealth preservation'
    ]
  },
  {
    icon: BarChart2,
    title: 'Portfolio Analysis',
    description: 'In-depth analysis and optimization of investment portfolios.',
    features: [
      'Performance attribution',
      'Risk analytics',
      'Portfolio rebalancing',
      'Investment research'
    ]
  }
];

export const Solutions = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our range of innovative financial solutions designed to help you achieve your investment goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};