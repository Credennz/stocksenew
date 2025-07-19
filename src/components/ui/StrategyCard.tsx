import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon, ArrowUpRight, TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface StrategyCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  metrics: {
    profit: number;
    winRate: number;
    trades: number;
    drawdown: number;
    profitFactor?: number;
  };
  delay: number;
  onClick: () => void;
}

export const StrategyCard: React.FC<StrategyCardProps> = ({
  icon: Icon,
  name,
  description,
  metrics,
  delay,
  onClick
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formatMetric = (value: number, isPercentage: boolean = true) => {
    if (!isPercentage && value >= 1000) {
      return `₹${value.toLocaleString('en-IN')}`;
    }
    return `${value.toFixed(2)}%`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      onClick={onClick}
      className="bg-[#1E1B31] rounded-2xl p-6 cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-[#2A2744] rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-white/50" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-white/70 mb-6">{description}</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white/70">Net Profit</span>
          </div>
          <p className="text-lg font-semibold text-white">{formatMetric(metrics.profit, false)}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <TrendingDown className="w-4 h-4 text-red-400" />
            <span className="text-sm text-white/70">Drawdown</span>
          </div>
          <p className="text-lg font-semibold text-white">{formatMetric(metrics.drawdown)}</p>
        </div>
        <div className="space-y-1">
          <span className="text-sm text-white/70">Win Rate</span>
          <p className="text-lg font-semibold text-white">{formatMetric(metrics.winRate)}</p>
        </div>
        <div className="space-y-1">
          <span className="text-sm text-white/70">Total Trades</span>
          <p className="text-lg font-semibold text-white">{metrics.trades}</p>
        </div>
        {metrics.profitFactor && (
          <div className="col-span-2 space-y-1">
            <div className="flex items-center gap-1">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-white/70">Profit Factor</span>
            </div>
            <p className="text-lg font-semibold text-white">{metrics.profitFactor}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};