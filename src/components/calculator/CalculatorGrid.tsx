import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowDown } from 'lucide-react';
import { calculateFD, calculateMF, calculateStockSe } from '../../utils/calculators';
import { ComparisonChart } from './ComparisonChart';
import { CalculatorCard } from './CalculatorCard';
import { ResultCard } from './ResultCard';

export const CalculatorGrid = () => {
  // Independent state for each calculator
  const [principal, setPrincipal] = useState(100000);
  const [fdRate, setFdRate] = useState(6); // Annual rate
  const [fdMonths, setFdMonths] = useState(12);
  const [mfRate, setMfRate] = useState(12); // Annual rate
  const [mfMonths, setMfMonths] = useState(12);
  const [stockSeRate, setStockSeRate] = useState(0.5); // Monthly rate
  const [stockSeMonths, setStockSeMonths] = useState(12);
  const [isCompounding, setIsCompounding] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPrincipal(value ? parseInt(value) : 0);
  };

  const handleMonthsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (value: number) => void
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setter(value ? parseInt(value) : 0);
  };

  // Calculate returns for each investment type
  const fdAmount = calculateFD(principal, fdRate, fdMonths / 12);
  const mfAmount = calculateMF(principal, mfRate, mfMonths / 12);
  const stockSeSimple = calculateStockSe(principal, stockSeRate, stockSeMonths, false);
  const stockSeCompound = calculateStockSe(principal, stockSeRate, stockSeMonths, true);

  const labelStyles = "block text-sm font-medium text-primary mb-2";

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
            Compare different investment options and make informed decisions
          </p>
        </motion.div>

        {/* Principal Amount Input */}
        <div className="max-w-md mx-auto mb-8">
          <label className={labelStyles}>Principal Amount</label>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Bank FD Calculator */}
          <CalculatorCard title="Bank FD Calculator">
            <div>
              <label className={labelStyles}>Annual Interest Rate</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min={4}
                  max={15}
                  step={0.1}
                  value={fdRate}
                  onChange={(e) => setFdRate(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-primary font-semibold">{fdRate}%</div>
              </div>
            </div>
            <div>
              <label className={labelStyles}>Duration (Months)</label>
              <input
                type="text"
                value={fdMonths}
                onChange={(e) => handleMonthsChange(e, setFdMonths)}
                className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary"
                placeholder="Enter months"
              />
            </div>
            <ResultCard label="Maturity Amount" amount={fdAmount} />
          </CalculatorCard>

          {/* StockSe Calculator */}
          <CalculatorCard title="StockSe Calculator">
            <div>
              <label className={labelStyles}>Monthly Return Rate</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min={0.5}
                  max={10}
                  step={0.5}
                  value={stockSeRate}
                  onChange={(e) => setStockSeRate(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-primary font-semibold">{stockSeRate}%</div>
              </div>
            </div>
            <div>
              <label className={labelStyles}>Duration (Months)</label>
              <input
                type="text"
                value={stockSeMonths}
                onChange={(e) => handleMonthsChange(e, setStockSeMonths)}
                className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary"
                placeholder="Enter months"
              />
            </div>
            <label className="flex items-center space-x-2 text-sm font-medium text-primary">
              <input
                type="checkbox"
                checked={isCompounding}
                onChange={(e) => setIsCompounding(e.target.checked)}
                className="rounded border-primary/20 text-primary focus:ring-primary"
              />
              <span>Reinvest Returns</span>
            </label>
            <ResultCard 
              label="Total Returns" 
              amount={isCompounding ? stockSeCompound : stockSeSimple} 
            />
          </CalculatorCard>

          {/* Mutual Fund Calculator */}
          <CalculatorCard title="Mutual Fund Calculator">
            <div>
              <label className={labelStyles}>Annual Return Rate</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min={8}
                  max={50}
                  step={0.5}
                  value={mfRate}
                  onChange={(e) => setMfRate(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-primary font-semibold">{mfRate}%</div>
              </div>
            </div>
            <div>
              <label className={labelStyles}>Duration (Months)</label>
              <input
                type="text"
                value={mfMonths}
                onChange={(e) => handleMonthsChange(e, setMfMonths)}
                className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary"
                placeholder="Enter months"
              />
            </div>
            <ResultCard label="Expected Returns" amount={mfAmount} />
          </CalculatorCard>
        </div>

        {/* Comparison Section */}
        <div className="text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            {showComparison ? 'Hide' : 'Show'} Comparison
            <ArrowDown className={`w-4 h-4 transition-transform ${showComparison ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {showComparison && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <div className="mb-4 flex justify-end">
              <select
                value={chartType}
                onChange={(e) => setChartType(e.target.value as 'bar' | 'line')}
                className="px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary bg-white"
              >
                <option value="bar">Bar Chart</option>
                <option value="line">Line Chart</option>
              </select>
            </div>
            <ComparisonChart
              data={{
                fd: fdAmount,
                mf: mfAmount,
                stockSeSimple,
                stockSeCompound
              }}
              chartType={chartType}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};