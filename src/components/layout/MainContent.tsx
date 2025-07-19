import React from 'react';
import Hero from '../sections/Hero';
import { Stats } from '../sections/Stats';
import { About } from '../sections/About';
import { Portfolio } from '../sections/Portfolio';
import { CTA } from '../sections/CTA';

export const MainContent = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Portfolio />
      <CTA />
    </main>
  );
};