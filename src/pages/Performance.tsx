import React from 'react';
import { PerformanceBanner } from '../components/sections/performance/PerformanceBanner';
import { PerformanceMetrics } from '../components/sections/performance/PerformanceMetrics';
import { Partners } from '../components/sections/performance/Partners';
import { CalculatorGrid } from '../components/calculator/CalculatorGrid';
import { ContactForm } from '../components/sections/performance/ContactForm';

export default function PerformancePage() {
  return (
    <div className="pt-16">
      <PerformanceBanner />
      <PerformanceMetrics />
      <Partners />
      <CalculatorGrid />
      <ContactForm />
    </div>
  );
}