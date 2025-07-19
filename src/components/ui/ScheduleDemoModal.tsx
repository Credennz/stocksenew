import React from 'react';
import { Modal } from './Modal';
import { ScheduleDemoForm } from '../forms/schedule-demo/ScheduleDemoForm';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleDemoModal: React.FC<ScheduleDemoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Schedule a Demo</h2>
        <p className="text-primary-dark/70 mb-6">
          Fill out the form below to schedule a personalized demo of our platform.
        </p>
        <ScheduleDemoForm onClose={onClose} />
      </div>
    </Modal>
  );
};