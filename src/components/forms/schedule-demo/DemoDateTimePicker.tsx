import React from 'react';
import { Calendar } from 'lucide-react';

interface DemoDateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const DemoDateTimePicker: React.FC<DemoDateTimePickerProps> = ({
  value,
  onChange,
  error,
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateTime = tomorrow.toISOString().slice(0, 16);

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-primary-dark">
        Choose a Date and Time <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
        <input
          type="datetime-local"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={minDateTime}
          required
          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none transition-colors
            ${error ? 'border-red-500' : 'border-primary/20 focus:border-primary'}`}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};