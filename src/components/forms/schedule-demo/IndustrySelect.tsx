import React from 'react';
import { Briefcase } from 'lucide-react';
import { services } from '../../../utils/constants';

interface ServiceSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ServiceSelect: React.FC<ServiceSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-primary-dark">
        Service <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
        <select
          name="service"
          value={value}
          onChange={onChange}
          required
          className="w-full pl-10 pr-4 py-2 appearance-none bg-white border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary-dark"
        >
          <option value="">Select desired service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};