import { useState, useEffect } from 'react';
import { sendConfirmationEmail, sendNotificationEmail } from '../utils/email';

interface FormData {
  name: string;
  email: string;
  phone: string;
  strategy: string;
  requirements: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  strategy: '',
  requirements: ''
};

export const useCustomAlgoForm = (onClose: () => void) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) {
      setFormData(initialFormData);
      setSelectedFile(null);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification to admin
      await sendNotificationEmail(formData, 'Custom Algo Development');
      
      // Send confirmation to user
      await sendConfirmationEmail(formData.email, formData.name, 'Custom Algo Development');

      setIsSuccess(true);
      
      // Reset form and close modal after delay
      setTimeout(() => {
        setFormData(initialFormData);
        setSelectedFile(null);
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    selectedFile,
    setSelectedFile,
    isSubmitting,
    isSuccess,
    handleSubmit
  };
};