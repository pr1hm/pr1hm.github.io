import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { LoadingScreen } from '../components/hirael/LoadingScreen';
import { Hero } from '../components/hirael/Hero';
import { SelectedWorks } from '../components/hirael/SelectedWorks';
import { ExperienceStack } from '../components/hirael/ExperienceStack';
import { Journal } from '../components/hirael/Journal';
import { Stats } from '../components/hirael/Stats';
import { Contact } from '../components/hirael/Contact';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div data-slot="portfolio" className="min-h-screen bg-[hsl(var(--bg))] text-[#f4f4f5] antialiased selection:bg-zinc-800 selection:text-white">
      <SEOHead
        title="Pratham Solanki — Software Developer & Systems Engineer"
        description="Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering. Building resilient systems, distributed backends, and machine learning architectures."
        canonicalUrl="https://prthm.xyz"
      />

      {isLoading ? <LoadingScreen onComplete={() => setIsLoading(false)} /> : null}

      <main className="relative">
        <Hero start={!isLoading} />
        <SelectedWorks />
        <ExperienceStack />
        <Journal />
        <Stats />
      </main>

      <Contact />
    </div>
  );
};

export default Home;
