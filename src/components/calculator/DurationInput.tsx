import React from 'react';

interface DurationInputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DurationInput: React.FC<DurationInputProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-primary">
        Investment Duration
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full pr-16 pl-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">Months</span>
      </div>
    </div>
  );
};