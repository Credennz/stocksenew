import React, { createContext, useContext, useState } from 'react';
import { GetStartedModal } from '../components/ui/GetStartedModal';
import { ScheduleDemoModal } from '../components/ui/ScheduleDemoModal';
import { BuildAlgoModal } from '../components/ui/BuildAlgoModal';
import { OpenAccountModal } from '../components/ui/OpenAccountModal';

interface ModalContextType {
  openGetStarted: () => void;
  closeGetStarted: () => void;
  openScheduleDemo: () => void;
  closeScheduleDemo: () => void;
  openBuildAlgo: () => void;
  closeBuildAlgo: () => void;
  openAccount: () => void;
  closeAccount: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);
  const [isBuildAlgoOpen, setIsBuildAlgoOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <ModalContext.Provider value={{
      openGetStarted: () => setIsGetStartedOpen(true),
      closeGetStarted: () => setIsGetStartedOpen(false),
      openScheduleDemo: () => setIsScheduleDemoOpen(true),
      closeScheduleDemo: () => setIsScheduleDemoOpen(false),
      openBuildAlgo: () => setIsBuildAlgoOpen(true),
      closeBuildAlgo: () => setIsBuildAlgoOpen(false),
      openAccount: () => setIsAccountOpen(true),
      closeAccount: () => setIsAccountOpen(false),
    }}>
      {children}
      <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
      <ScheduleDemoModal isOpen={isScheduleDemoOpen} onClose={() => setIsScheduleDemoOpen(false)} />
      <BuildAlgoModal isOpen={isBuildAlgoOpen} onClose={() => setIsBuildAlgoOpen(false)} />
      <OpenAccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};