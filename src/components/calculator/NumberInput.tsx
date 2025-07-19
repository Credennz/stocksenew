import React, { useState } from 'react';
import { validateNumberInput } from '../../utils/validation';

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix
}) => {
  const [inputValue, setInputValue] = useState(value.toString());
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    const validatedNumber = validateNumberInput(newValue, min, max);
    if (validatedNumber !== null) {
      onChange(validatedNumber);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {label}
      </label>
      <div className="space-y-4">
        <div className="relative">
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
              ${prefix ? 'pl-8' : ''}
            `}
          />
          {prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-dark">
              {prefix}
            </span>
          )}
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-dark">
              {suffix}
            </span>
          )}
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="w-full"
        />
        
        <div className="flex justify-between text-sm text-primary-dark/70">
          <span>{prefix}{min.toLocaleString()}{suffix}</span>
          <span>{prefix}{max.toLocaleString()}{suffix}</span>
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-500">
          Please enter a value between {prefix}{min.toLocaleString()}{suffix} and {prefix}{max.toLocaleString()}{suffix}
        </p>
      )}
    </div>
  );
};