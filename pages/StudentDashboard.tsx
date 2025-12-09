import React from 'react';
import { 
  Play, 
  Clock, 
  FileText, 
  BarChart2, 
  Award, 
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { StudentTest, StudentHistory, ViewState } from '../types';

interface StudentDashboardProps {
  onNavigate: (view: ViewState) => void;
}

const upcomingTests: StudentTest[] = [
  { id: '1', title: 'Group IV Full Model Exam 05', subject: 'General Studies + Tamil', duration: 180, questions: 200, status: 'live', dueDate: 'Expires in 2 days' },
  { id: '2', title: 'Unit 8: History of Tamil Society', subject: 'History', duration: 60, questions: 50, status: 'upcoming', dueDate: 'Starts tomorrow, 10 AM' },
];

const history: StudentHistory[] = [
  { id: '101', testName: 'Indian Polity - Preamble', date: 'Yesterday', score: 85, totalMarks: 100, rank: 12 },
  { id: '102', testName: 'General Science Weekly', date: '2 days ago', score: 62, totalMarks: 100, rank: 45 },
  { id: '103', testName: 'Maths - Ratio & Proportion', date: 'Oct 20', score: 95, totalMarks: 100, rank: 3 },
];

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-lg shadow-blue-500/20">
        <h1 className="text-2xl md:text-3xl font-bold font-heading mb-2">Welcome back, Student!</h1>
        <p className="text-blue-100 mb-6 max-w-xl">You have <span className="font-bold text-white">1 live test</span> pending. Keep your streak alive by attempting it today.</p>
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate('student-test')}
            className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-md"
          >
            Start Pending Test
          </button>
          <button className="bg-blue-700/50 text-white border border-blue-400/30 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View Analytics
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Column - Tests */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* My Tests Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="text-primary" size={20} />
                My Tests
              </h2>
              <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">See All</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {upcomingTests.map((test) => (
                <div key={test.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${
                      test.status === 'live' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {test.status === 'live' ? 'Live Now' : 'Upcoming'}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{test.subject}</span>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">
                    {test.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {test.duration} mins
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertCircle size={14} />
                      {test.questions} Qs
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs font-semibold text-gray-400">{test.dueDate}</span>
                    <button 
                      onClick={() => onNavigate('student-test')}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                        test.status === 'live' 
                        ? 'bg-primary text-white hover:bg-blue-700 shadow-sm' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={test.status !== 'live'}
                    >
                      {test.status === 'live' ? 'Take Test' : 'Not Started'}
                      {test.status === 'live' && <Play size={14} className="fill-current" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Performance */}
          <section>
             <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BarChart2 className="text-purple-600" size={20} />
                Recent Results
              </h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4">Test Name</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4 text-center">Score</th>
                      <th className="px-6 py-4 text-center">Rank</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {history.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                        <td className="px-6 py-4 font-medium text-gray-900">{item.testName}</td>
                        <td className="px-6 py-4 text-gray-500">{item.date}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${
                            (item.score / item.totalMarks) > 0.8 ? 'text-green-600' : 
                            (item.score / item.totalMarks) > 0.6 ? 'text-yellow-600' : 'text-red-500'
                          }`}>
                            {item.score}/{item.totalMarks}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                           <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                             {item.rank}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-primary hover:text-blue-700 font-medium text-xs flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Report <ChevronRight size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>

        {/* Right Sidebar - Stats */}
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
             <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
               <Award className="text-yellow-500" size={20} />
               Performance Overview
             </h3>
             
             <div className="space-y-6">
               <div>
                 <div className="flex justify-between text-sm mb-1">
                   <span className="text-gray-500">Average Score</span>
                   <span className="font-bold text-gray-900">76%</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-2">
                   <div className="bg-blue-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                 </div>
               </div>

               <div>
                 <div className="flex justify-between text-sm mb-1">
                   <span className="text-gray-500">Accuracy</span>
                   <span className="font-bold text-gray-900">82%</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-2">
                   <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                 </div>
               </div>

               <div>
                 <div className="flex justify-between text-sm mb-1">
                   <span className="text-gray-500">Percentile</span>
                   <span className="font-bold text-gray-900">Top 10%</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-2">
                   <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                 </div>
               </div>
             </div>

             <div className="mt-8 pt-6 border-t border-gray-100">
               <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Strong Topics</h4>
               <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded font-medium">History</span>
                 <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded font-medium">Polity</span>
               </div>
               <h4 className="text-xs font-bold text-gray-500 uppercase mt-4 mb-3">Weak Topics</h4>
                <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded font-medium">Economics</span>
                 <span className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded font-medium">Maths</span>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;