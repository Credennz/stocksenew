import React from 'react';
import { Modal } from './Modal';
import { SimpleBuildAlgoForm } from '../forms/build-algo/SimpleBuildAlgoForm';

interface BuildAlgoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuildAlgoModal: React.FC<BuildAlgoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Get Started with Your Algo</h2>
        <p className="text-primary-dark/70 mb-6">
          Fill out your contact details and we'll help you build your custom algorithm.
        </p>
        <SimpleBuildAlgoForm onClose={onClose} />
      </div>
    </Modal>
  );
};