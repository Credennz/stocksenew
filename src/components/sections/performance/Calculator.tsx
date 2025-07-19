import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { Line } from 'react-chartjs-2';

export const Calculator = () => {
  const [formData, setFormData] = useState({
    initialInvestment: 100000,
    returnRate: 0.5,
    duration: 1, // Duration in months
    reinvest: false
  });
  const [showComparison, setShowComparison] = useState(false);

  const calculateOurStrategy = () => {
    const { initialInvestment, returnRate, duration, reinvest } = formData;
    const monthlyRate = returnRate / 100;

    if (reinvest) {
      // Compound Interest: I = P × ((1 + r)^(n) - 1) + P
      return initialInvestment * Math.pow(1 + monthlyRate, duration);
    } else {
      // Simple Interest: I = ((P × r) × n) + P
      return ((initialInvestment * monthlyRate) * duration) + initialInvestment;
    }
  };

  const calculateFDValue = () => {
    const { initialInvestment, duration } = formData;
    // FD with 6% annual interest
    const annualRate = 0.06;
    return initialInvestment * (1 + (annualRate * duration / 12));
  };

  const calculateMFValue = () => {
    const { initialInvestment, duration } = formData;
    // Mutual Fund with 12% annual return
    const monthlyRate = 0.12 / 12;
    return initialInvestment * Math.pow(1 + monthlyRate, duration);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : Number(value);
    setFormData(prev => ({ ...prev, [name]: newValue }));
    setShowComparison(false);
  };

  const chartData = {
    labels: ['Initial Investment', 'Fixed Deposit', 'Mutual Fund', 'Our Strategy'],
    datasets: [
      {
        label: 'Investment Growth Comparison',
        data: [
          formData.initialInvestment,
          calculateFDValue(),
          calculateMFValue(),
          calculateOurStrategy() * 2 // Multiply our strategy result by 2
        ],
        backgroundColor: [
          'rgba(22, 15, 74, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(22, 15, 74, 0.5)'
        ],
        borderColor: [
          'rgba(22, 15, 74, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(22, 15, 74, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => '₹' + value.toLocaleString()
        }
      }
    }
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
              <CalculatorIcon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Investment Calculator
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            See how your investments could grow with our proven strategies
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Initial Investment (₹)
              </label>
              <input
                type="range"
                name="initialInvestment"
                min="10000"
                max="1000000"
                step="10000"
                value={formData.initialInvestment}
                onChange={handleChange}
                className="w-full"
              />
              <div className="text-right text-primary font-semibold">
                ₹{formData.initialInvestment.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Expected Return Rate (% per month)
              </label>
              <input
                type="range"
                name="returnRate"
                min="0.5"
                max="10"
                step="0.5"
                value={formData.returnRate}
                onChange={handleChange}
                className="w-full"
              />
              <div className="text-right text-primary font-semibold">
                {formData.returnRate}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Investment Duration
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary bg-white"
              >
                {Array.from({ length: 60 }, (_, i) => i + 1).map(month => (
                  <option key={month} value={month}>
                    {month} {month === 1 ? 'Month' : 'Months'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-primary-dark">
                <input
                  type="checkbox"
                  name="reinvest"
                  checked={formData.reinvest}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, reinvest: e.target.checked }));
                    setShowComparison(false);
                  }}
                  className="rounded border-primary/20 text-primary focus:ring-primary"
                />
                <span>Reinvest Returns</span>
              </label>
            </div>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-sm text-primary-dark mb-2">Projected Value</div>
            <div className="text-3xl font-bold text-primary mb-4">
              ₹{Math.round(calculateOurStrategy() * 2).toLocaleString()}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowComparison(true)}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              See Comparison
            </motion.button>
          </div>

          {showComparison && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Investment Growth Comparison
              </h3>
              <Line data={chartData} options={chartOptions} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};