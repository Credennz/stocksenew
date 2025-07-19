import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

const Hero = () => {
  const { openBuildAlgo, openAccount } = useModal();

  return (
    <div className="relative bg-gradient-primary overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transform Your<br />
              Financial Future
            </h1>
            <p className="text-purple-200 text-lg mb-6">
              Experience the next generation of financial technology with our comprehensive suite of tools and services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryButton onClick={openBuildAlgo}>
                Build Your Algo <ArrowRight className="w-4 h-4 ml-2 inline" />
              </PrimaryButton>
              <button 
                onClick={openAccount}
                className="px-6 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Open Free Account
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;