import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Send, 
  Plus, 
  Upload, 
  GripVertical, 
  Trash2, 
  Copy,
  Clock,
  Settings,
  MoreHorizontal
} from 'lucide-react';
import { Question, ViewState } from '../types';

interface TestBuilderProps {
  onNavigate: (view: ViewState) => void;
}

const mockQuestions: Question[] = [
  { id: '1', text: 'Which article of the Indian Constitution deals with the Election Commission?', type: 'mcq', marks: 1.5, correctOption: 1 },
  { id: '2', text: 'Who was the first Satyagrahi chosen by Mahatma Gandhi for the Individual Satyagraha in 1940?', type: 'mcq', marks: 1.5, correctOption: 0 },
  { id: '3', text: 'Calculate the compound interest on Rs. 10,000 for 2 years at 10% per annum.', type: 'mcq', marks: 1.5, correctOption: 2 },
];

const TestBuilder: React.FC<TestBuilderProps> = ({ onNavigate }) => {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [activeTab, setActiveTab] = useState<'create' | 'import'>('create');

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Builder Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('admin-dashboard')}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Untitled Mock Test</h1>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Draft</span>
              <span>Last saved 2 mins ago</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors">
            <Save size={18} />
            <span className="hidden sm:inline">Save Draft</span>
          </button>
          <button 
             onClick={() => onNavigate('admin-dashboard')}
             className="flex items-center gap-2 px-6 py-2 bg-primary text-white hover:bg-blue-700 rounded-lg font-bold shadow-lg shadow-blue-500/20 transition-colors"
          >
            <Send size={18} />
            Publish
          </button>
        </div>
      </div>

      {/* Builder Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Canvas - Question List */}
        <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Add Question Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center gap-4">
              <button 
                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-primary hover:bg-blue-50 transition-all group ${activeTab === 'create' ? 'bg-blue-50 border-primary' : ''}`}
                onClick={() => setActiveTab('create')}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Plus size={20} />
                </div>
                <span className="font-bold text-gray-700 text-sm">Add Question</span>
                <span className="text-xs text-gray-400">Manual Entry or AI</span>
              </button>
              
              <button 
                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all group ${activeTab === 'import' ? 'bg-purple-50 border-purple-500' : ''}`}
                onClick={() => setActiveTab('import')}
              >
                 <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Upload size={20} />
                </div>
                <span className="font-bold text-gray-700 text-sm">Bulk Upload</span>
                <span className="text-xs text-gray-400">Excel / CSV</span>
              </button>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:border-blue-300 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 cursor-grab text-gray-300 hover:text-gray-500">
                      <GripVertical size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Question {index + 1}</span>
                         <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="p-1 hover:bg-gray-100 rounded text-gray-500"><Copy size={16} /></button>
                           <button className="p-1 hover:bg-red-50 hover:text-red-500 rounded text-gray-500"><Trash2 size={16} /></button>
                         </div>
                      </div>
                      <h3 className="text-gray-900 font-medium mb-3">{q.text}</h3>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">Type: MCQ</span>
                        <span className="bg-gray-100 px-2 py-1 rounded">Marks: {q.marks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State / End */}
            <div className="text-center py-8">
              <p className="text-gray-400 text-sm">End of Test</p>
            </div>

          </div>
        </div>

        {/* Right Properties Panel */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto hidden lg:block">
          <div className="p-6">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Settings size={18} />
              Test Settings
            </h3>
            
            <div className="space-y-6">
              {/* Duration */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Duration (Minutes)</label>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  <Clock size={16} className="text-gray-400" />
                  <input type="number" defaultValue={180} className="bg-transparent w-full text-sm font-medium focus:outline-none" />
                </div>
              </div>

              {/* Total Marks */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Total Marks</label>
                <input type="number" defaultValue={300} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>

               {/* Blueprint */}
               <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Blueprint Template</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>TNPSC Group IV - General</option>
                  <option>TNPSC Group II - Mains</option>
                  <option>Custom Structure</option>
                </select>
              </div>

              {/* Batches */}
              <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Assign to Batch</label>
                 <div className="space-y-2">
                   <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                     <input type="checkbox" checked className="rounded text-primary focus:ring-primary" />
                     Morning Batch 2025
                   </label>
                   <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                     <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                     Weekend Special
                   </label>
                 </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors">
                  Update Settings
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestBuilder;