import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { LineChart } from './LineChart';
import { PaymentModal } from './PaymentModal';

interface StrategyModalProps {
  strategy: any;
  onClose: () => void;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({ strategy, onClose }) => {
  const [paymentType, setPaymentType] = useState<'tradingview' | 'algo' | null>(null);

  const handleTradingViewClick = () => {
    setPaymentType('tradingview');
  };

  const handleAlgoClick = () => {
    setPaymentType('algo');
  };

  const handlePaymentClose = () => {
    setPaymentType(null);
  };

  const formatMetric = (value: number, isPercentage: boolean = true) => {
    if (!isPercentage && value >= 1000) {
      return `₹${value.toLocaleString('en-IN')}`;
    }
    return `${value.toFixed(2)}%`;
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-primary">{strategy.name}</h2>
                  <p className="text-primary-dark/70">{strategy.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-primary-dark/50 hover:text-primary-dark"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Performance Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-primary-dark/70">Net Profit</span>
                    </div>
                    <p className="text-xl font-semibold text-primary">
                      {formatMetric(strategy.metrics.profit, false)}
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="flex items-center gap-1">
                      <TrendingDown className="w-4 h-4 text-red-400" />
                      <span className="text-sm text-primary-dark/70">Drawdown</span>
                    </div>
                    <p className="text-xl font-semibold text-primary">
                      {formatMetric(strategy.metrics.drawdown)}
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <span className="text-sm text-primary-dark/70">Win Rate</span>
                    <p className="text-xl font-semibold text-primary">
                      {formatMetric(strategy.metrics.winRate)}
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <span className="text-sm text-primary-dark/70">Total Trades</span>
                    <p className="text-xl font-semibold text-primary">{strategy.metrics.trades}</p>
                  </div>
                  {strategy.metrics.profitFactor && (
                    <div className="col-span-2 md:col-span-4 bg-primary/5 rounded-lg p-4">
                      <div className="flex items-center gap-1">
                        <Activity className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-primary-dark/70">Profit Factor</span>
                      </div>
                      <p className="text-xl font-semibold text-primary">
                        {strategy.metrics.profitFactor}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Performance Chart */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Performance Chart</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <LineChart />
                </div>
              </div>

              {/* Technical Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Technical Indicators</h3>
                  <ul className="space-y-2">
                    {strategy.indicators.map((indicator: string) => (
                      <li key={indicator} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-primary-dark">{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Supported Timeframes</h3>
                  <div className="flex flex-wrap gap-2">
                    {strategy.timeframes.map((timeframe: string) => (
                      <span
                        key={timeframe}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {timeframe}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleTradingViewClick}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Add to TradingView <ExternalLink className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleAlgoClick}
                  className="flex-1 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Run Algo
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {paymentType && (
        <PaymentModal
          isOpen={true}
          onClose={handlePaymentClose}
          type={paymentType}
          strategyName={strategy?.name || ''}
          price={4999}
        />
      )}
    </>
  );
};