import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, TrendingUp, Binary, BarChart2 } from 'lucide-react';
import { StrategyCard } from '../ui/StrategyCard';
import { StrategyModal } from '../ui/StrategyModal';
import { SearchBar } from '../ui/SearchBar';
import { useModal } from '../../context/ModalContext';
import { useStrategies } from '../../hooks/useStrategies';

// Extract unique strategy types and add 'All' option
const getStrategyTypes = (strategies: any[]) => {
  return ['All', ...new Set(strategies.map(s => s.type))];
};

export const Strategies = () => {
  const { strategies, loading, error } = useStrategies();
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const { openBuildAlgo } = useModal();

  const strategyTypes = getStrategyTypes(strategies);

  const filteredStrategies = strategies.filter((strategy: any) => {
    const matchesSearch = strategy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      strategy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || strategy.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <section className="py-20 bg-primary-dark" id="strategies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Advanced Trading Strategies
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Discover our collection of sophisticated trading algorithms designed for optimal market performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <div className="flex gap-2 flex-wrap justify-center">
              {strategyTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedType === type
                      ? 'bg-white text-primary'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openBuildAlgo()}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Build Your Algo
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStrategies.map((strategy: any, index: number) => (
            <StrategyCard
              key={strategy.id}
              icon={strategy.icon}
              name={strategy.name}
              description={strategy.description}
              metrics={strategy.metrics}
              onClick={() => setSelectedStrategy(strategy)}
              delay={index * 0.2}
            />
          ))}
        </div>

        {selectedStrategy && (
          <StrategyModal
            strategy={selectedStrategy}
            onClose={() => setSelectedStrategy(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Strategies;