import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DateTimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  icon?: LucideIcon;
  required?: boolean;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  value,
  onChange,
  error,
  icon: Icon,
  required = false,
}) => {
  // Get tomorrow's date as the minimum allowed date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateTime = tomorrow.toISOString().slice(0, 16);

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-primary-dark">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
        )}
        <input
          type="datetime-local"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={minDateTime}
          required={required}
          className={`w-full pl-${Icon ? '10' : '4'} pr-4 py-2 border rounded-lg focus:outline-none transition-colors
            ${error ? 'border-red-500' : 'border-primary/20 focus:border-primary'}`}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};