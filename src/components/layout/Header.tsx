import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { PrimaryButton } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { useModal } from '../../context/ModalContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { openGetStarted } = useModal();

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-primary/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            onClick={() => handleNavigation('home')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-bold text-xl hover:text-white/80 transition-colors cursor-pointer"
          >
           <img className='logo-stockse' src="logo.png" ></img>
          </motion.button>

          <nav className="hidden md:flex space-x-8">
            <NavLink 
              href="#"
              onClick={() => handleNavigation('home')}
              active={currentPage === 'home'}
            >
              Home
            </NavLink>
            <NavLink 
              href="#"
              onClick={() => handleNavigation('strategies')}
              active={currentPage === 'strategies'}
            >
              Strategies
            </NavLink>
            <NavLink 
              href="#"
              onClick={() => handleNavigation('solutions')}
              active={currentPage === 'solutions'}
            >
              Solutions
            </NavLink>
            <NavLink 
              href="#"
              onClick={() => handleNavigation('performance')}
              active={currentPage === 'performance'}
            >
              Performance
            </NavLink>
            <NavLink 
              href="#"
              onClick={() => handleNavigation('about')}
              active={currentPage === 'about'}
            >
              About
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <PrimaryButton onClick={openGetStarted}>Contact Us</PrimaryButton>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen} 
        onNavigate={handleNavigation}
        currentPage={currentPage}
      />
    </header>
  );
};

export default Header;