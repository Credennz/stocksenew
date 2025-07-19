import React from 'react';

interface PrincipalInputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const PrincipalInput: React.FC<PrincipalInputProps> = ({
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-primary">
        Principal Amount
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">₹</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={`w-full pl-8 pr-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary ${className}`}
        />
      </div>
    </div>
  );
};