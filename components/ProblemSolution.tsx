import React from 'react';
import { Check, Clock, AlertTriangle, FileText } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* The Problem */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-2">
              The Problem
            </div>
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              Your Staff Is Overworked. <br />Your System Doesn’t Scale. <br /><span className="text-red-500">Here’s the fix.</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Manual correction takes hours</h3>
                  <p className="text-gray-500 text-sm mt-1">Staff spends valuable time grading OMR sheets manually instead of teaching.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Rank list errors lead to complaints</h3>
                  <p className="text-gray-500 text-sm mt-1">Manual entry leads to mistakes, student complaints, and loss of trust.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Teachers spend more time preparing tests than teaching</h3>
                  <p className="text-gray-500 text-sm mt-1">Copy-pasting questions from word docs is tedious and formats often break.</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
              The Solution
            </div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8">
              Automate Everything & <br /><span className="text-primary">Focus on Teaching</span>
            </h2>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="mt-1 w-6 h-6 rounded-full bg-success flex items-center justify-center text-white flex-shrink-0">
                   <Check size={14} strokeWidth={3} />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900">Instant evaluation & ranking</h3>
                   <p className="text-gray-600 text-sm">Results are ready the second a student submits.</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="mt-1 w-6 h-6 rounded-full bg-success flex items-center justify-center text-white flex-shrink-0">
                   <Check size={14} strokeWidth={3} />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900">100% accurate results</h3>
                   <p className="text-gray-600 text-sm">Generate state-level or center-level ranks automatically.</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="mt-1 w-6 h-6 rounded-full bg-success flex items-center justify-center text-white flex-shrink-0">
                   <Check size={14} strokeWidth={3} />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900">One-click test creation and scheduling</h3>
                   <p className="text-gray-600 text-sm">Drag and drop questions or use our AI builder.</p>
                 </div>
               </div>
            </div>

            <div className="mt-10">
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
                See the Difference
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;