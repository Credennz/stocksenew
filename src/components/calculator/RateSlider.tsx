import React from 'react';

interface RateSliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  label: string;
}

export const RateSlider: React.FC<RateSliderProps> = ({
  value,
  onChange,
  min,
  max,
  step,
  label
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-primary">
        {label}
      </label>
      <div className="space-y-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="text-right text-primary font-semibold">{value}%</div>
      </div>
    </div>
  );
};