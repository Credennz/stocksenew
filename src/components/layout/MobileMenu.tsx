import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';
import { PrimaryButton } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

interface MobileMenuProps {
  isOpen: boolean;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onNavigate,
  currentPage 
}) => {
  const { openGetStarted } = useModal();

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden bg-primary-dark"
    >
      <div className="px-4 pt-2 pb-3 space-y-1">
        <NavLink 
          href="#" 
          mobile 
          active={currentPage === 'home'}
          onClick={() => onNavigate('home')}
        >
          Home
        </NavLink>
        <NavLink 
          href="#" 
          mobile 
          active={currentPage === 'strategies'}
          onClick={() => onNavigate('strategies')}
        >
          Strategies
        </NavLink>
        <NavLink 
          href="#" 
          mobile
          active={currentPage === 'solutions'}
          onClick={() => onNavigate('solutions')}
        >
          Solutions
        </NavLink>
        <NavLink 
          href="#" 
          mobile
          active={currentPage === 'performance'}
          onClick={() => onNavigate('performance')}
        >
          Performance
        </NavLink>
        <NavLink 
          href="#" 
          mobile
          active={currentPage === 'about'}
          onClick={() => onNavigate('about')}
        >
          About
        </NavLink>
        <div className="pt-2">
          <PrimaryButton onClick={openGetStarted} className="w-full">
            Contact Us
          </PrimaryButton>
        </div>
      </div>
    </motion.div>
  );
};