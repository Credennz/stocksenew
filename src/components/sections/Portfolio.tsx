import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, IndianRupee, PieChart } from 'lucide-react';

const PortfolioCard = ({ title, value, change, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-6"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className={`text-sm font-semibold ${change >= 0 ? 'text-primary' : 'text-red-500'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
    </div>
    <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
    <p className="text-2xl font-bold text-primary-dark"> &#8377;{value}</p>
  </motion.div>
);
const PortfolioCard2 = ({ title, value, change, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-6"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className={`text-sm font-semibold ${change >= 0 ? 'text-primary' : 'text-red-500'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
    </div>
    <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
    <p className="text-2xl font-bold text-primary-dark"> {value}</p>
  </motion.div>
);

export const Portfolio = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Investment Portfolio
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Track our performance across different investment categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <PortfolioCard
            title="Total Assets"
            value="23 cr"
            change={12.5}
            icon={IndianRupee}
          />
          <PortfolioCard
            title="Portfolio Growth"
            value="10 cr"
            change={43.5}
            icon={TrendingUp}
          />
          <PortfolioCard2
            title="Customer Growth"
            value="30% YoY increase"
            change={30}
            icon={PieChart}
          />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Investment Distribution</h3>
              <ul className="space-y-4">
                {[
                   { label: 'Financial Services', value: '50%' },
                  { label: 'Technology Sector', value: '20%' },                 
                  { label: 'StartUps', value: '20%' },
                  { label: 'Real Estate', value: '10%' }
                ].map(item => (
                  <li key={item.label} className="flex items-center justify-between">
                    <span className="text-primary-dark/70">{item.label}</span>
                    <span className="font-semibold text-primary">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">Key Achievements</h3>
              <ul className="space-y-2">
                {[
                  '50% average annual return',
                  '100+ portfolio companies'
                ].map(item => (
                  <li key={item} className="flex items-center text-primary-dark/70">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};