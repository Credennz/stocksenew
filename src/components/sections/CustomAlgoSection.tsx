import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, FileText, MessageSquare } from 'lucide-react';
import { FormInput } from '../ui/FormInput';
import { FileUpload } from '../ui/FileUpload';
import { SuccessPopup } from '../ui/SuccessPopup';

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

export const CustomAlgoSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedFile(null);
    setIsSubmitting(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
        Custom Algo Development Request:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Strategy Description: ${formData.strategy}
        Additional Requirements: ${formData.requirements}
      `;

      // Send email to admin
      const mailtoLink = `mailto:hello@stockse.in?subject=Custom Algo Development Request&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Send confirmation email to user
      const confirmationBody = `
        Dear ${formData.name},

        Thank you for your interest in our Custom Algo Development service.
        We have received your request and will get back to you within 24-48 hours.

        Best regards,
        StockSe Team
      `;

      const confirmationLink = `mailto:${formData.email}?subject=Custom Algo Development Request Received&body=${encodeURIComponent(confirmationBody)}`;
      setTimeout(() => {
        window.location.href = confirmationLink;
      }, 1000);

      setShowSuccess(true);
      scrollToTop();
      
      // Reset form after showing success message
      resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showSuccess && (
          <SuccessPopup 
            onClose={() => setShowSuccess(false)}
            message="We'll review your strategy and get back to you within 24-48 hours with a custom proposal."
          />
        )}
      </AnimatePresence>

      <section id="custom-algo-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Custom Algo Development</h2>
              <p className="text-primary-dark/70">
                Tell us about your trading strategy and requirements, and we'll help you automate it.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <FormInput
                label="Full Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                icon={User}
                required
              />

              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                icon={Mail}
                required
              />

              <FormInput
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                icon={Phone}
                required
              />

              <FormInput
                label="Strategy Description"
                name="strategy"
                type="textarea"
                placeholder="Describe your trading strategy in detail..."
                value={formData.strategy}
                onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
                icon={FileText}
                required
              />

              <FormInput
                label="Additional Requirements"
                name="requirements"
                type="textarea"
                placeholder="Any specific requirements or preferences..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                icon={MessageSquare}
              />

              <FileUpload
                onFileSelect={setSelectedFile}
                selectedFile={selectedFile}
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
                    Submit Request <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};