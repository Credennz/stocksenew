import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, AlertCircle } from 'lucide-react';
import { Modal } from './Modal';
import { FormInput } from './FormInput';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'tradingview' | 'algo';
  strategyName: string;
  price: number;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  type,
  strategyName,
  price,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tradingviewUsername: '',
    broker: '',
    otherBroker: '',
    additionalInfo: ''
  });

  const [showOtherBroker, setShowOtherBroker] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'broker') {
      setShowOtherBroker(value === 'Other');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `
      New ${type === 'tradingview' ? 'TradingView Strategy' : 'Algo Trading'} Request:
      
      Strategy: ${strategyName}
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      ${type === 'tradingview' ? `TradingView Username: ${formData.tradingviewUsername}` : 
        `Broker: ${showOtherBroker ? formData.otherBroker : formData.broker}
        Additional Info: ${formData.additionalInfo}`}
    `;

    const mailtoLink = `mailto:hello@stockse.in?subject=${type === 'tradingview' ? 'TradingView' : 'Algo'} Strategy Purchase - ${strategyName}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    window.open('https://www.phonepe.com', '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary mb-2">
            {type === 'tradingview' ? 'Add to TradingView' : 'Run Algo'}
          </h2>
          <p className="text-primary-dark/70 mb-4">
            {type === 'tradingview' 
              ? 'Get access to our premium strategy on TradingView'
              : 'Run this algorithm on your selected broker platform'}
          </p>
          <div className="text-3xl font-bold text-primary">₹{price}</div>
        </div>

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
            label="Email"
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

          {type === 'tradingview' ? (
            <FormInput
              label="TradingView Username"
              name="tradingviewUsername"
              type="text"
              placeholder="Enter your TradingView username"
              value={formData.tradingviewUsername}
              onChange={handleChange}
              required
            />
          ) : (
            <>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-primary">
                  Select Broker <span className="text-red-500">*</span>
                </label>
                <select
                  name="broker"
                  value={formData.broker}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-primary bg-white"
                >
                  <option value="">Select your broker</option>
                  <option value="Angel One">Angel One</option>
                  <option value="Zerodha">Zerodha</option>
                  <option value="Groww">Groww</option>
                  <option value="Dhan">Dhan</option>
                  <option value="Upstox">Upstox</option>
                  <option value="Soonya">Soonya</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {showOtherBroker && (
                <FormInput
                  label="Other Broker"
                  name="otherBroker"
                  type="text"
                  placeholder="Enter your broker name"
                  value={formData.otherBroker}
                  onChange={handleChange}
                  required
                />
              )}

              <FormInput
                label="Additional Information"
                name="additionalInfo"
                type="textarea"
                placeholder="Any specific requirements or trading hours..."
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </>
          )}

          <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-3 mt-4">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-primary-dark">
              After submitting the form, you'll be redirected to PhonePe for secure payment. Once completed, you'll receive access instructions via email.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold mt-6 flex items-center justify-center"
          >
            Proceed to Payment <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </form>
      </div>
    </Modal>
  );
};