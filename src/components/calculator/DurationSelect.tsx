import React, { useState } from 'react';
import { validateNumberInput } from '../../utils/validation';

interface DurationSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export const DurationSelect: React.FC<DurationSelectProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value.toString());
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    const validatedNumber = validateNumberInput(newValue, 1, 60);
    if (validatedNumber !== null) {
      onChange(validatedNumber);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(e.target.value);
    setInputValue(newValue.toString());
    onChange(newValue);
    setError(false);
  };

  const handleBlur = () => {
    if (error) {
      setInputValue(value.toString());
      setError(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-primary-dark">
        Investment Duration
      </label>
      <div className="flex gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors
              ${error 
                ? 'border-red-500' 
                : 'border-primary/20 focus:border-primary'
              }
            `}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-dark">
            Months
          </span>
        </div>
        
        <select
          value={value}
          onChange={handleSelectChange}
          className="flex-1 px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary bg-white"
        >
          {Array.from({ length: 60 }, (_, i) => i + 1).map(month => (
            <option key={month} value={month}>
              {month} {month === 1 ? 'Month' : 'Months'}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="text-sm text-red-500">
          Please enter a value between 1 and 60 months
        </p>
      )}
    </div>
  );
};