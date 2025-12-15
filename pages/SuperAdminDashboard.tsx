import React from 'react';
import { 
  Building2, 
  Users, 
  DollarSign, 
  Activity, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { DashboardStat, ViewState } from '../types';

interface SuperAdminDashboardProps {
  onNavigate: (view: ViewState) => void;
}

const stats: DashboardStat[] = [
  { label: 'Total Centers', value: '142', change: '+12 this month', icon: Building2, color: 'text-blue-600', positive: true },
  { label: 'Active Students', value: '18,500', change: '+8.5% vs last month', icon: Users, color: 'text-purple-600', positive: true },
  { label: 'Monthly Revenue', value: '₹4.2L', change: '+15% growth', icon: DollarSign, color: 'text-green-600', positive: true },
  { label: 'System Load', value: '24%', icon: Activity, color: 'text-orange-600', positive: true },
];

const recentActivities = [
  { type: 'registration', message: 'New center "Vetri IAS Academy" registered.', time: '10 mins ago' },
  { type: 'subscription', message: '"Success Point" upgraded to Enterprise Plan.', time: '2 hours ago' },
  { type: 'alert', message: 'High traffic detected from Madurai region.', time: '4 hours ago' },
  { type: 'payment', message: 'Payment received from "Alpha Coaching" (₹999).', time: '5 hours ago' },
];

const SuperAdminDashboard: React.FC<SuperAdminDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Platform Overview</h1>
          <p className="text-gray-500 text-sm">Monitoring system health and business metrics.</p>
        </div>
        <button 
          onClick={() => onNavigate('super-admin-centers')}
          className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-all shadow-lg"
        >
          Manage Centers
        </button>
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
                <TrendingUp size={14} className="text-green-500" />
                <span className="text-green-600 font-bold">{stat.change}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-soft border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900 text-lg">Revenue Trends</h3>
            <select className="text-sm border-gray-200 rounded-lg text-gray-500 focus:ring-primary focus:border-primary">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
             {[35, 45, 30, 60, 75, 50, 65, 80, 55, 70, 85, 90].map((h, i) => (
               <div key={i} className="flex-1 bg-gray-100 hover:bg-gray-900 transition-colors rounded-t-lg relative group" style={{ height: `${h}%` }}>
                 <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   ₹{h}k
                 </div>
               </div>
             ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-400 uppercase font-bold">
            <span>Jan</span><span>Dec</span>
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100">
           <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
              <Activity size={20} className="text-gray-400" />
              Live Activity
            </h3>
            <div className="space-y-6">
              {recentActivities.map((act, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                    act.type === 'alert' ? 'bg-red-500' : 
                    act.type === 'payment' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <p className="text-sm text-gray-800 font-medium leading-snug">{act.message}</p>
                    <span className="text-xs text-gray-400 mt-1 block">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">
              View All Logs
            </button>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;