import React from 'react';

interface CalculatorCardProps {
  title: string;
  children: React.ReactNode;
}

export const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, children }) => {
  return (
    <div className="bg-primary/5 rounded-xl p-6">
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};