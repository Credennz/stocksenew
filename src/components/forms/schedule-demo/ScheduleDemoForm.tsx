import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FormInput } from '../../ui/FormInput';
import { ServiceSelect } from './IndustrySelect';
import { DemoDateTimePicker } from './DemoDateTimePicker';
import { useScheduleDemoForm } from '../../../hooks/useScheduleDemoForm';
import { SuccessMessage } from './SuccessMessage';
import { RecaptchaCheckbox } from './RecaptchaCheckbox';

export const ScheduleDemoForm = ({ onClose }: { onClose: () => void }) => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleDateTimeChange,
    handleSubmit
  } = useScheduleDemoForm(onClose);

  if (isSuccess) {
    return <SuccessMessage onClose={onClose} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Full Name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
      />

      <DemoDateTimePicker
        value={formData.dateTime}
        onChange={handleDateTimeChange}
        error={errors.dateTime}
      />

      <ServiceSelect
        value={formData.service}
        onChange={handleChange}
      />

      <FormInput
        label="Additional Comments or Questions"
        name="message"
        type="textarea"
        placeholder="Let us know any specific questions or requirements..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <RecaptchaCheckbox />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary text-white py-3 rounded-lg font-semibold mt-6 flex items-center justify-center
          ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          'Scheduling...'
        ) : (
          <>
            Schedule My Demo <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </motion.button>
    </form>
  );
};