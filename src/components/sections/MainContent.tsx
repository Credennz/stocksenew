import React from 'react';
import Hero from './Hero';
import { Stats } from './Stats';
import { ExclusivePartnerships } from './ExclusivePartnerships';
import { About } from './About';
import { ContactFormSection } from './ContactFormSection';
import { Portfolio } from './Portfolio';
import { CTA } from './CTA';

export const MainContent = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <ExclusivePartnerships />
      <About />
      <ContactFormSection />
      <Portfolio />
      <CTA />
    </main>
  );
};