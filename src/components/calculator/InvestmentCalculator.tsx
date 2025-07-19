import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { calculateInvestment } from '../../utils/calculator';

export const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState(50000);
  const [ratePerMonth, setRatePerMonth] = useState(0.5);
  const [months, setMonths] = useState(12);
  const [isCompounding, setIsCompounding] = useState(false);

  const totalAmount = calculateInvestment(principal, ratePerMonth, months, isCompounding);

  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPrincipal(value ? parseInt(value) : 0);
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMonths(value ? parseInt(value) : 0);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Investment Calculator
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            Calculate your potential returns with our investment calculator
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
          <div className="space-y-6">
            {/* Principal Amount Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-primary">
                Principal Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">₹</span>
                <input
                  type="text"
                  value={principal}
                  onChange={handlePrincipalChange}
                  className="w-full pl-8 pr-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Monthly Return Rate Slider */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-primary">
                Monthly Return Rate
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min={0.5}
                  max={10}
                  step={0.5}
                  value={ratePerMonth}
                  onChange={(e) => setRatePerMonth(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-primary font-semibold">
                  {ratePerMonth}%
                </div>
              </div>
            </div>

            {/* Investment Duration Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-primary">
                Investment Duration
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={months}
                  onChange={handleMonthsChange}
                  className="w-full pr-16 pl-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary"
                  placeholder="Enter months"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">Months</span>
              </div>
            </div>

            {/* Compounding Toggle */}
            <label className="flex items-center space-x-2 text-sm font-medium text-primary">
              <input
                type="checkbox"
                checked={isCompounding}
                onChange={(e) => setIsCompounding(e.target.checked)}
                className="rounded border-primary/20 text-primary focus:ring-primary"
              />
              <span>Reinvest Returns (Compounding)</span>
            </label>

            {/* Result Display */}
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-primary mb-2">Total Amount</div>
              <motion.div
                key={totalAmount}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl font-bold text-primary"
              >
                ₹{Math.round(totalAmount).toLocaleString()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};