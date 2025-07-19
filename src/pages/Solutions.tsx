import React from 'react';
import { SolutionsBanner } from '../components/sections/SolutionsBanner';
import { Solutions as ServicesSection } from '../components/sections/Solutions';
import { TestimonialSlider } from '../components/sections/TestimonialSlider';
import { ConsultationSection } from '../components/sections/ConsultationSection';

const SolutionsPage = () => {
  return (
    <div className="pt-16">
      <SolutionsBanner />
      <ServicesSection />
      <TestimonialSlider />
      <ConsultationSection />
    </div>
  );
};

export default SolutionsPage;