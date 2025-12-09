import React from 'react';
import { CheckCircle, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-accent mb-6">
              Run TNPSC Mock Tests <br className="hidden lg:block" />
              <span className="gradient-text">Without Wasting Staff Time</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Build tests, assign batches, correct papers, and publish rank lists — all in minutes. 
              Perfect for TNPSC study centers. No technical skills needed.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 transform hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                <Play size={20} className="fill-current text-primary" />
                View Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success" />
                <span>TNPSC Format</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success" />
                <span>Auto-Evaluation</span>
              </div>
               <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success" />
                <span>Zero Manual Work</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 p-4 rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">dashboard.tnpscmaster.com</div>
              </div>
              
              {/* Mockup Body */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/3 bg-blue-50 p-4 rounded-xl">
                    <div className="text-primary font-bold text-2xl">1,240</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Total Students</div>
                  </div>
                  <div className="w-1/3 bg-green-50 p-4 rounded-xl">
                    <div className="text-success font-bold text-2xl">98%</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Pass Rate</div>
                  </div>
                  <div className="w-1/3 bg-purple-50 p-4 rounded-xl">
                    <div className="text-purple-600 font-bold text-2xl">12m</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Avg Time Saved</div>
                  </div>
                </div>
                
                <div className="border rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800">Recent Mock Tests</h3>
                    <button className="text-primary text-xs font-bold">View All</button>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                            T{i}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Group IV Full Test 0{i}</div>
                            <div className="text-xs text-gray-400">200 Questions • 3 Hours</div>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                          Live
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Decor blur */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;