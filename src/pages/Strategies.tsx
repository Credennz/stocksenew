import React from 'react';
import { CustomAlgoBanner } from '../components/sections/CustomAlgoBanner';
import { Strategies as StrategiesSection } from '../components/sections/Strategies';
import { BuildAlgoFormSection } from '../components/sections/BuildAlgoFormSection';

const StrategiesPage = () => {
  return (
    <div className="pt-16">
      <CustomAlgoBanner />
      <StrategiesSection />
      <BuildAlgoFormSection />
    </div>
  );
};

export default StrategiesPage;