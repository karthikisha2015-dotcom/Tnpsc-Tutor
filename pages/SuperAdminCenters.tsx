import React, { useState } from 'react';
import { 
  Search, 
  MoreVertical, 
  ShieldCheck, 
  ShieldAlert, 
  Mail, 
  Phone,
  Users
} from 'lucide-react';
import { CoachingCenter, ViewState } from '../types';

interface SuperAdminCentersProps {
  onNavigate: (view: ViewState) => void;
}

const mockCenters: CoachingCenter[] = [
  { id: '1', name: 'Vetri IAS Academy', ownerName: 'Ramesh Kumar', email: 'ramesh@vetriias.com', phone: '9876543210', plan: 'Growth', status: 'active', joinedDate: 'Jan 12, 2025', studentCount: 240 },
  { id: '2', name: 'Success Point', ownerName: 'Suresh B', email: 'admin@successpoint.in', phone: '9876543211', plan: 'Starter', status: 'active', joinedDate: 'Feb 05, 2025', studentCount: 85 },
  { id: '3', name: 'Alpha Coaching Center', ownerName: 'Deepa M', email: 'deepa@alpha.edu', phone: '9876543212', plan: 'Enterprise', status: 'inactive', joinedDate: 'Dec 20, 2024', studentCount: 1200 },
  { id: '4', name: 'Madurai Toppers', ownerName: 'Karthik S', email: 'contact@mtoppers.com', phone: '9876543213', plan: 'Growth', status: 'active', joinedDate: 'Mar 10, 2025', studentCount: 150 },
  { id: '5', name: 'Chennai Civil Service', ownerName: 'Anitha R', email: 'anitha@ccs.com', phone: '9876543214', plan: 'Starter', status: 'active', joinedDate: 'Jan 22, 2025', studentCount: 45 },
];

const SuperAdminCenters: React.FC<SuperAdminCentersProps> = ({ onNavigate }) => {
  const [centers, setCenters] = useState<CoachingCenter[]>(mockCenters);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleStatus = (id: string) => {
    setCenters(centers.map(c => 
      c.id === id ? { ...c, status: c.status === 'active' ? 'inactive' : 'active' } : c
    ));
  };

  const filteredCenters = centers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.ownerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Coaching Centers</h1>
          <p className="text-gray-500 text-sm">Manage registered institutes and their status.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search centers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 w-64"
            />
          </div>
          <button className="bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-soft border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4 text-left">Center Details</th>
                <th className="px-6 py-4 text-left">Contact Info</th>
                <th className="px-6 py-4 text-center">Plan</th>
                <th className="px-6 py-4 text-center">Students</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCenters.map((center) => (
                <tr key={center.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                        {center.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{center.name}</div>
                        <div className="text-xs text-gray-500">Joined: {center.joinedDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                       <div className="flex items-center gap-1.5 text-sm text-gray-700 font-medium">
                         <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-500">
                           <Users size={10} />
                         </span>
                         {center.ownerName}
                       </div>
                       <div className="flex items-center gap-1.5 text-xs text-gray-500">
                         <Mail size={12} />
                         {center.email}
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                      center.plan === 'Enterprise' ? 'bg-purple-100 text-purple-700' : 
                      center.plan === 'Growth' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {center.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                    {center.studentCount}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      center.status === 'active' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {center.status === 'active' ? (
                        <ShieldCheck size={12} />
                      ) : (
                        <ShieldAlert size={12} />
                      )}
                      {center.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                       <button 
                         onClick={() => toggleStatus(center.id)}
                         className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                           center.status === 'active' 
                           ? 'bg-red-50 text-red-600 hover:bg-red-100'
                           : 'bg-green-50 text-green-600 hover:bg-green-100'
                         }`}
                       >
                         {center.status === 'active' ? 'Deactivate' : 'Activate'}
                       </button>
                       <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                         <MoreVertical size={16} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredCenters.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No centers found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminCenters;