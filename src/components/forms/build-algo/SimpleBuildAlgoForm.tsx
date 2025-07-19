import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, Phone } from 'lucide-react';
import { FormInput } from '../../ui/FormInput';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: ''
};

export const SimpleBuildAlgoForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Send email notification
      const emailBody = `
        New Build Algo Request:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
      `;

      const mailtoLink = `mailto:hello@stockse.in?subject=Build Algo Request&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setIsSuccess(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
        setFormData(initialFormData);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <ArrowRight className="w-8 h-8 text-green-500" />
        </motion.div>
        <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-primary-dark/70">
          Thanks! We will contact you soon to help build your algorithm.
        </p>
      </div>
    );
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
        icon={User}
        required
      />

      <FormInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        icon={Mail}
        required
      />

      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
        icon={Phone}
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary text-white py-3 rounded-lg font-semibold mt-6 flex items-center justify-center
          ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          'Submitting...'
        ) : (
          <>
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </motion.button>
    </form>
  );
};