import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, User, Phone, MessageSquare, FileText } from 'lucide-react';
import { Modal } from './Modal';
import { FormInput } from './FormInput';
import { FileUpload } from './FileUpload';
import { validateForm } from '../../utils/validation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setSelectedFile(null);
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <ArrowRight className="w-8 h-8 text-green-500" />
          </motion.div>
          <h2 className="text-2xl font-bold text-primary mb-2">Thank You!</h2>
          <p className="text-primary-dark/70">
            We've received your message and will get back to you within 24-48 hours.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Get Started</h2>
        <p className="text-primary-dark/70 mb-6">
          Fill out the form below and our team will get in touch with you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Your Name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            icon={User}
            required
          />

          <FormInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
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
            error={errors.phone}
            icon={Phone}
            required
          />

          <FormInput
            label="Subject (Optional)"
            name="subject"
            type="text"
            placeholder="Briefly describe your inquiry"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
            icon={FileText}
          />

          <FormInput
            label="Message (Optional)"
            name="message"
            type="textarea"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            icon={MessageSquare}
          />

          <FileUpload
            onFileSelect={setSelectedFile}
            selectedFile={selectedFile}
            error={errors.file}
          />

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="recaptcha"
              className="w-4 h-4 text-primary border-primary/20 rounded focus:ring-primary"
              required
            />
            <label htmlFor="recaptcha" className="text-sm text-primary-dark">
              I'm not a robot
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary text-white py-3 rounded-lg font-semibold mt-6 flex items-center justify-center
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </Modal>
  );
};