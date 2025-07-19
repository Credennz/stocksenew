import React from 'react';

interface CompoundingToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const CompoundingToggle: React.FC<CompoundingToggleProps> = ({ value, onChange }) => {
  return (
    <label className="flex items-center space-x-2 text-sm font-medium text-primary-dark">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-primary/20 text-primary focus:ring-primary"
      />
      <span>Reinvest Returns (Compounding)</span>
    </label>
  );
};