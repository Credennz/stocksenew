import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export const useBuildAlgoForm = (onClose: () => void) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
        Build Algo Request:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Subject: ${formData.subject || 'N/A'}
        Message: ${formData.message || 'N/A'}
      `;

      const mailtoLink = `mailto:hello@stockse.in?subject=Build Algo Request&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData(initialFormData);
        setSelectedFile(null);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    selectedFile,
    isSubmitting,
    isSuccess,
    handleChange,
    handleFileSelect,
    handleSubmit
  };
};