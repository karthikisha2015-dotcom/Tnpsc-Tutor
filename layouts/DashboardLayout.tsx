import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Database, 
  Users, 
  Calendar, 
  BarChart2, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  ChevronRight,
  HelpCircle,
  Shield,
  Building2,
  Activity
} from 'lucide-react';
import { ViewState } from '../types';
import { useAuth } from '../contexts/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'student' | 'super-admin';
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role, currentView, onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    await signOut();
    onNavigate('landing');
  };

  const adminLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', view: 'admin-dashboard' as const },
    { icon: FileText, label: 'Test Builder', view: 'admin-test-builder' as const },
    { icon: Database, label: 'Question Bank', view: 'admin-question-bank' as const },
    { icon: Users, label: 'Batches', view: 'admin-dashboard' as const }, // Placeholder
    { icon: Calendar, label: 'Schedule', view: 'admin-dashboard' as const }, // Placeholder
    { icon: BarChart2, label: 'Results', view: 'admin-dashboard' as const }, // Placeholder
    { icon: Settings, label: 'Settings', view: 'admin-dashboard' as const }, // Placeholder
  ];

  const studentLinks = [
    { icon: LayoutDashboard, label: 'My Tests', view: 'student-dashboard' as const },
    { icon: FileText, label: 'Take Test', view: 'student-dashboard' as const }, // Placeholder
    { icon: BarChart2, label: 'History', view: 'student-dashboard' as const }, // Placeholder
    { icon: HelpCircle, label: 'Help', view: 'student-dashboard' as const }, // Placeholder
  ];

  const superAdminLinks = [
    { icon: LayoutDashboard, label: 'Overview', view: 'super-admin-dashboard' as const },
    { icon: Building2, label: 'Centers', view: 'super-admin-centers' as const },
    { icon: Activity, label: 'Monitoring', view: 'super-admin-dashboard' as const }, // Placeholder
    { icon: Settings, label: 'Settings', view: 'super-admin-dashboard' as const }, // Placeholder
  ];

  const links = role === 'super-admin' 
    ? superAdminLinks 
    : role === 'admin' 
      ? adminLinks 
      : studentLinks;

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex font-sans">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 z-50 transition-all duration-300 ease-in-out flex flex-col
          ${sidebarOpen ? 'w-64' : 'w-20 hidden lg:flex'}
          ${mobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div 
            className="flex items-center gap-2 overflow-hidden whitespace-nowrap cursor-pointer"
            onClick={() => onNavigate('landing')}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-lg ${role === 'super-admin' ? 'bg-gray-900' : 'bg-primary'}`}>
              {role === 'super-admin' ? 'S' : 'T'}
            </div>
            {(sidebarOpen || mobileMenuOpen) && (
              <span className="font-bold text-xl text-gray-800 font-heading">
                {role === 'super-admin' ? 'Super Admin' : <>TNPSC<span className="text-primary">Master</span></>}
              </span>
            )}
          </div>
          {/* Mobile Close */}
          <button 
            className="ml-auto lg:hidden text-gray-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {links.map((link, idx) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={idx}
                onClick={() => {
                  onNavigate(link.view);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                `}
                title={!sidebarOpen ? link.label : ''}
              >
                <link.icon size={22} className={isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'} />
                {(sidebarOpen || mobileMenuOpen) && (
                  <span>{link.label}</span>
                )}
                {isActive && (sidebarOpen || mobileMenuOpen) && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all
              ${!sidebarOpen && !mobileMenuOpen ? 'justify-center' : ''}
            `}
          >
            <LogOut size={22} />
            {(sidebarOpen || mobileMenuOpen) && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu size={24} />
            </button>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:block text-gray-400 hover:text-gray-600 transition-colors"
            >
              {sidebarOpen ? <Menu size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {/* Breadcrumb / Page Title */}
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
              <span className="hover:text-primary cursor-pointer" onClick={() => onNavigate('landing')}>Home</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium capitalize">
                {currentView.replace(/-/g, ' ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Notifications */}
            <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
              <Bell size={22} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-gray-900">
                  {role === 'super-admin' ? 'System Owner' : role === 'admin' ? 'Center Admin' : 'Student User'}
                </div>
                <div className="text-xs text-gray-500 max-w-[120px] truncate">
                  {user?.email || 'Guest'}
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border cursor-pointer ${
                role === 'super-admin' 
                  ? 'bg-gray-900 text-white border-gray-700' 
                  : 'bg-primary/10 text-primary border-primary/20'
              }`}>
                {role === 'super-admin' ? 'S' : role === 'admin' ? 'A' : 'S'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;