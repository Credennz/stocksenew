import React from 'react';

interface DurationSelectProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DurationSelect: React.FC<DurationSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-primary-dark mb-2">
        Investment Duration
      </label>
      <select
        name="duration"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary bg-white"
      >
        {Array.from({ length: 60 }, (_, i) => i + 1).map(month => (
          <option key={month} value={month}>
            {month} {month === 1 ? 'Month' : 'Months'}
          </option>
        ))}
      </select>
    </div>
  );
};