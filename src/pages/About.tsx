import React from 'react';
import { AboutHero } from '../components/sections/about/AboutHero';
import { OurStory } from '../components/sections/about/OurStory';
import { MissionVision } from '../components/sections/about/MissionVision';
import { Achievements } from '../components/sections/about/Achievements';
import { Team } from '../components/sections/about/Team';
import { AboutTestimonials } from '../components/sections/about/AboutTestimonials';
import { AboutCTA } from '../components/sections/about/AboutCTA';

export default function About() {
  return (
    <div className="pt-16">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Achievements />
      <Team />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
}