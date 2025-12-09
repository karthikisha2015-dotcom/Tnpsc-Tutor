import React from 'react';
import { UploadCloud, Smartphone, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-gray-900">Simple. Fast. Reliable.</h2>
          <p className="mt-4 text-gray-600">Launch your first test in less than 5 minutes.</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 shadow-lg flex items-center justify-center mb-6 relative z-10">
              <UploadCloud size={32} className="text-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">1</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Create the Test</h3>
            <p className="text-gray-600 text-sm max-w-xs">Choose questions, set the timer, and publish.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
             <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 shadow-lg flex items-center justify-center mb-6 relative z-10">
              <Smartphone size={32} className="text-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">2</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Students Take It Online</h3>
            <p className="text-gray-600 text-sm max-w-xs">Clean mobile-friendly interface. No technical issues.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
             <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 shadow-lg flex items-center justify-center mb-6 relative z-10">
              <Award size={32} className="text-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">3</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Instant Results</h3>
            <p className="text-gray-600 text-sm max-w-xs">Rank list, PDFs, performance trends — everything done automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;