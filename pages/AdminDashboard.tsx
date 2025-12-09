import React from 'react';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  Plus, 
  Upload, 
  MoreVertical,
  AlertCircle
} from 'lucide-react';
import { DashboardStat, RecentTest, StudentResult, ViewState } from '../types';

interface AdminDashboardProps {
  onNavigate?: (view: ViewState) => void;
}

const stats: DashboardStat[] = [
  { label: 'Active Tests', value: '12', icon: FileText, color: 'text-blue-600', positive: true },
  { label: 'Total Students', value: '1,240', change: '+24 this week', icon: Users, color: 'text-purple-600', positive: true },
  { label: 'Tests Taken', value: '856', change: '+12% vs last month', icon: CheckCircle, color: 'text-green-600', positive: true },
  { label: 'Avg. Score', value: '68%', change: '-2% vs last week', icon: TrendingUp, color: 'text-orange-600', positive: false },
];

const recentTests: RecentTest[] = [
  { id: '1', name: 'Group IV Full Mock 05', date: 'Oct 24, 2025', attempts: 142, avgScore: 72, status: 'Live' },
  { id: '2', name: 'General Tamil Unit 3', date: 'Oct 22, 2025', attempts: 310, avgScore: 81, status: 'Closed' },
  { id: '3', name: 'Indian Polity Quick Test', date: 'Oct 20, 2025', attempts: 89, avgScore: 65, status: 'Draft' },
];

const topStudents: StudentResult[] = [
  { id: '1', name: 'Karthik Raja', avatar: 'K', score: 98, rank: 1, trend: 'up' },
  { id: '2', name: 'Priya M', avatar: 'P', score: 96, rank: 2, trend: 'same' },
  { id: '3', name: 'Sarah Thomas', avatar: 'S', score: 95, rank: 3, trend: 'up' },
  { id: '4', name: 'Abdul Rahman', avatar: 'A', score: 92, rank: 4, trend: 'down' },
];

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm">Welcome back, here's what's happening at your center today.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 font-medium transition-colors shadow-sm">
            <Upload size={18} />
            <span className="hidden sm:inline">Upload Questions</span>
          </button>
          <button 
            onClick={() => onNavigate?.('admin-test-builder')}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-lg shadow-blue-500/30"
          >
            <Plus size={18} />
            <span>Create Test</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-soft border border-gray-100 flex flex-col justify-between h-32 hover:translate-y-[-2px] transition-transform duration-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
              </div>
              <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
            </div>
            {stat.change && (
              <div className="flex items-center gap-1 text-xs mt-2">
                <span className={stat.positive ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>
                  {stat.change}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 text-lg">Score Distribution</h3>
              <select className="text-sm border-gray-200 rounded-lg text-gray-500 focus:ring-primary focus:border-primary">
                <option>Last 30 Days</option>
                <option>This Week</option>
              </select>
            </div>
            
            {/* Simple CSS Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 pt-4 border-b border-gray-100 pb-2">
               {[
                 { range: '0-20%', count: 15, h: '15%' },
                 { range: '21-40%', count: 45, h: '35%' },
                 { range: '41-60%', count: 120, h: '60%' },
                 { range: '61-80%', count: 85, h: '50%' },
                 { range: '81-100%', count: 30, h: '25%' }
               ].map((bar, i) => (
                 <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                   <div 
                     className="w-full bg-blue-100 rounded-t-lg relative group-hover:bg-primary transition-colors duration-300"
                     style={{ height: bar.h }}
                   >
                     <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                       {bar.count} Students
                     </div>
                   </div>
                   <span className="text-xs text-gray-400 font-medium">{bar.range}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Recent Tests Table */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-50">
              <h3 className="font-bold text-gray-900 text-lg">Recent Mock Tests</h3>
              <button className="text-primary text-sm font-semibold hover:text-blue-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-4 text-left">Test Name</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-center">Attempts</th>
                    <th className="px-6 py-4 text-center">Avg Score</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentTests.map((test) => (
                    <tr key={test.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{test.name}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{test.date}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">{test.attempts}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                          test.avgScore > 75 ? 'bg-green-100 text-green-700' : 
                          test.avgScore > 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {test.avgScore}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                         <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                            test.status === 'Live' ? 'bg-green-50 text-green-600 border border-green-200' :
                            test.status === 'Closed' ? 'bg-gray-100 text-gray-600 border border-gray-200' :
                            'bg-yellow-50 text-yellow-600 border border-yellow-200'
                         }`}>
                           {test.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>}
                           {test.status}
                         </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (1/3) */}
        <div className="space-y-6">
          
          {/* Top Performers */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Top Performers</h3>
            <div className="space-y-4">
              {topStudents.map((student, idx) => (
                <div key={student.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${
                         idx === 0 ? 'bg-yellow-400' : idx === 1 ? 'bg-gray-400' : idx === 2 ? 'bg-orange-400' : 'bg-blue-400'
                       }`}>
                         {student.avatar}
                       </div>
                       <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-[10px] font-bold text-gray-700">
                         #{student.rank}
                       </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{student.name}</div>
                      <div className="text-xs text-gray-500">Avg. Score: {student.score}%</div>
                    </div>
                  </div>
                  {student.trend === 'up' && <TrendingUp size={16} className="text-green-500" />}
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-primary font-medium hover:bg-blue-50 rounded-lg transition-colors">
              View Leaderboard
            </button>
          </div>

          {/* System Alerts */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
              <AlertCircle size={20} className="text-gray-400" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-gray-800 font-medium">Failed Upload</p>
                  <p className="text-xs text-gray-500">History_Unit_2.xlsx contained 3 formatting errors.</p>
                  <span className="text-[10px] text-gray-400 mt-1 block">10 mins ago</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-gray-800 font-medium">New Batch Created</p>
                  <p className="text-xs text-gray-500">"Morning Glory Batch 2025" was added successfully.</p>
                   <span className="text-[10px] text-gray-400 mt-1 block">2 hours ago</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-gray-800 font-medium">System Update</p>
                  <p className="text-xs text-gray-500">Ranking algorithm updated for better accuracy.</p>
                   <span className="text-[10px] text-gray-400 mt-1 block">Yesterday</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;