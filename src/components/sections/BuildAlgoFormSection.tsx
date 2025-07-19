import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, FileText, MessageSquare } from 'lucide-react';
import { FormInput } from '../ui/FormInput';
import { FileUpload } from '../ui/FileUpload';
import { useBuildAlgoForm } from '../../hooks/useBuildAlgoForm';

export const BuildAlgoFormSection = () => {
  const {
    formData,
    selectedFile,
    isSubmitting,
    handleChange,
    handleFileSelect,
    handleSubmit
  } = useBuildAlgoForm(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.reload();
  });

  return (
    <section id="build-algo-form" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Build Your Custom Algo
          </h2>
          <p className="text-primary-dark/70">
            Tell us about your trading strategy and requirements, and we'll help you automate it.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-primary/5 rounded-xl p-8">
          <FormInput
            label="Your Name"
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
            placeholder="Enter your email address"
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
            required
          />

          <FormInput
            label="Subject"
            name="subject"
            type="text"
            placeholder="Briefly describe your inquiry"
            value={formData.subject}
            onChange={handleChange}
            icon={FileText}
          />

          <FormInput
            label="Message"
            name="message"
            type="textarea"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            icon={MessageSquare}
          />

          <FileUpload
            onFileSelect={handleFileSelect}
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
    </section>
  );
};