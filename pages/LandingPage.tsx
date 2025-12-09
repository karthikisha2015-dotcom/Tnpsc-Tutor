import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DemoSection from '../components/DemoSection';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { ViewState } from '../types';

interface LandingPageProps {
  onNavigate: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar onNavigate={onNavigate} />
      <main>
        <Hero onNavigate={onNavigate} />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <DemoSection />
        <Pricing onNavigate={onNavigate} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default LandingPage;