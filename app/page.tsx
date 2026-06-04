import React from 'react';
import AgencyHeroSection from '../components/shadcn-space/blocks/hero-01/index';

// HunterScrollProfile  → already rendered inside AgencyHeroSection (index.tsx)
// ImageComparisonBasic → already rendered inside HeroSection (hero.tsx)
// No need to import them here — page.tsx is the entry shell only.

const page = () => {
  return (
    <main>
      <AgencyHeroSection />
    </main>
  );
};

export default page;
