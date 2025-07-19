import { useState } from 'react';
import { validateScheduleDemo } from '../utils/scheduleValidation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  dateTime: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  dateTime: '',
  service: '',
  message: '',
};

export const useScheduleDemoForm = (onClose: () => void) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDateTimeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, dateTime: value }));
    if (errors.dateTime) {
      setErrors((prev) => ({ ...prev, dateTime: '' }));
    }
  };

  const sendEmail = async (data: FormData) => {
    const emailBody = `
      New Demo Request:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Requested Date/Time: ${new Date(data.dateTime).toLocaleString()}
      Service: ${data.service}
      Message: ${data.message || 'No additional message'}
    `;

    // In a real application, you would use a server-side API or email service
    // For this example, we'll use mailto: to demonstrate the functionality
    const mailtoLink = `mailto:hello@stockse.in?subject=Demo Request from ${data.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateScheduleDemo(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData(initialFormData);
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleDateTimeChange,
    handleSubmit,
  };
};