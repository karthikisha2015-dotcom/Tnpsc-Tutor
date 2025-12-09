import React, { useState } from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer>
      {/* Final CTA */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Make Your Test System Faster, Cleaner, and More Accurate
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Start using the next-generation platform for TNPSC mock tests.
          </p>
          <button 
            onClick={() => onNavigate('admin-dashboard')}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
          >
            Start Free Trial
          </button>
          <p className="mt-4 text-sm text-blue-200 opacity-80">No credit card required. 14-day free trial.</p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-accent text-gray-400 py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-heading text-white cursor-pointer" onClick={() => onNavigate('landing')}>
            TNPSC<span className="text-primary">Master</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm">
            &copy; 2025 TNPSC Master. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;