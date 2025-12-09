import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Can we upload our own questions?",
    answer: "Yes. You can manually add questions or upload in bulk via Excel."
  },
  {
    question: "Is this only for TNPSC?",
    answer: "No. You can create tests for any exam pattern."
  },
  {
    question: "How many tests can we create?",
    answer: "Unlimited in all plans."
  },
  {
    question: "Do students need an app?",
    answer: "No. Works on any mobile browser."
  },
  {
    question: "Can I add multiple staff members?",
    answer: "Yes. Faculty accounts available."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-bgLight">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-800">{item.question}</span>
                {openIndex === index ? <Minus size={20} className="text-primary"/> : <Plus size={20} className="text-gray-400"/>}
              </button>
              
              <div className={`px-6 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;