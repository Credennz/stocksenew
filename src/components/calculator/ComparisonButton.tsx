import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ComparisonButtonProps {
  showComparison: boolean;
  onClick: () => void;
}

export const ComparisonButton: React.FC<ComparisonButtonProps> = ({
  showComparison,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
    >
      {showComparison ? 'Hide' : 'Show'} Comparison
      <ArrowDown className={`w-4 h-4 transition-transform ${showComparison ? 'rotate-180' : ''}`} />
    </button>
  );
};