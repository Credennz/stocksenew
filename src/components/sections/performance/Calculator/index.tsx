import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { CalculatorForm } from './CalculatorForm';
import { ComparisonChart } from './ComparisonChart';
import { calculateInvestmentValues } from './calculations';

export const Calculator = () => {
  const [formData, setFormData] = useState({
    initialInvestment: 100000,
    returnRate: 0.5,
    duration: 1,
    reinvest: false
  });
  const [showComparison, setShowComparison] = useState(false);

  const values = calculateInvestmentValues(formData);

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
            StockSe Investment Calculator
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto">
            See how your investments could grow with our proven strategies
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
          <CalculatorForm 
            formData={formData} 
            setFormData={setFormData}
            setShowComparison={setShowComparison}
            projectedValue={values.ourStrategy * 2}
          />

          {showComparison && (
            <ComparisonChart values={values} initialInvestment={formData.initialInvestment} />
          )}
        </div>
      </div>
    </section>
  );
};