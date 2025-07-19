import React from 'react';
import { motion } from 'framer-motion';

interface CalculatorFormProps {
  formData: {
    initialInvestment: number;
    returnRate: number;
    duration: number;
    reinvest: boolean;
  };
  setFormData: (data: any) => void;
  setShowComparison: (show: boolean) => void;
  projectedValue: number;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  formData,
  setFormData,
  setShowComparison,
  projectedValue
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : Number(value);
    setFormData(prev => ({ ...prev, [name]: newValue }));
    setShowComparison(false);
  };

  return (
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
            onChange={handleChange}
            className="rounded border-primary/20 text-primary focus:ring-primary"
          />
          <span>Reinvest Returns</span>
        </label>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-sm">
        <div className="text-sm text-primary-dark mb-2">Projected Value</div>
        <div className="text-3xl font-bold text-primary mb-4">
          ₹{Math.round(projectedValue).toLocaleString()}
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
    </div>
  );
};