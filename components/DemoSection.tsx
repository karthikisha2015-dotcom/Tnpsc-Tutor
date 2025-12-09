import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight, Play } from 'lucide-react';
import { generateSampleQuestion } from '../services/geminiService';

const DemoSection: React.FC = () => {
  const [topic, setTopic] = useState('Indus Valley Civilization');
  const [loading, setLoading] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateSampleQuestion(topic);
      setGeneratedQuestion(result);
    } catch (err) {
      setError("Unable to generate question. Please ensure API Key is configured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 text-sm font-semibold mb-6 border border-gray-700">
              <Sparkles size={16} />
              <span>AI-Powered Test Creation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              See How Quickly You Can <br />Publish a Full Mock Test
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A modern interface designed for teachers, not tech people. 
              Build, assign, and evaluate inside a single dashboard.
            </p>
            
            <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors mb-8">
              <Play size={20} className="fill-current" />
              Watch Demo
            </button>

            {/* Interactive Widget Prompt */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 max-w-md">
              <h3 className="text-sm font-bold text-gray-200 mb-3">Try our AI Question Builder:</h3>
              <label className="block text-xs font-medium text-gray-400 mb-2">Enter a Subject Topic</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="e.g. Indian Constitution"
                />
                <button 
                  onClick={handleGenerate}
                  disabled={loading}
                  className="bg-primary hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center min-w-[100px]"
                >
                  {loading ? <Loader2 className="animate-spin" size={20}/> : 'Generate'}
                </button>
              </div>
              {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
            </div>
          </div>

          {/* Right Demo Area */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800 min-h-[400px] relative transition-all duration-300">
              
              {!generatedQuestion && !loading && (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                   <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                     <Sparkles size={32} />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Ready to Generate</h3>
                   <p className="text-gray-500">Enter a topic on the left and hit generate to see the AI magic.</p>
                </div>
              )}

              {loading && (
                 <div className="flex flex-col items-center justify-center h-full text-center py-12">
                   <Loader2 size={48} className="text-primary animate-spin mb-4" />
                   <p className="text-gray-500 font-medium">Crafting a unique question for you...</p>
                 </div>
              )}

              {generatedQuestion && !loading && (
                <div className="animate-fade-in">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded uppercase">
                      Generated Question
                    </span>
                    <span className="text-gray-400 text-xs">AI Confidence: High</span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold mb-6 text-gray-900">
                    {generatedQuestion.question}
                  </h3>

                  <div className="space-y-3 mb-6">
                    {generatedQuestion.options?.map((opt: string, idx: number) => (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg border-2 flex items-center gap-3 transition-colors ${
                          idx === generatedQuestion.correctAnswerIndex 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-100'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
                           idx === generatedQuestion.correctAnswerIndex ? 'bg-green-500 text-white border-green-500' : 'bg-white border-gray-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className={idx === generatedQuestion.correctAnswerIndex ? 'text-green-800 font-medium' : 'text-gray-600'}>
                          {opt}
                        </span>
                        {idx === generatedQuestion.correctAnswerIndex && <ArrowRight size={16} className="ml-auto text-green-600" />}
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <h4 className="text-sm font-bold text-yellow-800 mb-1">Explanation:</h4>
                    <p className="text-sm text-yellow-800 opacity-90 leading-relaxed">
                      {generatedQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;