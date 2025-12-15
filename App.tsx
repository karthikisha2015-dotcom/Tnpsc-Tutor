import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/AdminDashboard';
import TestBuilder from './pages/TestBuilder';
import StudentDashboard from './pages/StudentDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import SuperAdminCenters from './pages/SuperAdminCenters';
import LoginPage from './pages/LoginPage';
import { ViewState } from './types';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Loader2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      // Basic role logic based on email for demo purposes
      // In a real app, this comes from a 'profiles' table in Supabase
      if (user.email?.includes('superadmin')) {
         if (currentView === 'landing' || currentView === 'login') setCurrentView('super-admin-dashboard');
      } else if (user.email?.includes('admin')) {
         if (currentView === 'landing' || currentView === 'login') setCurrentView('admin-dashboard');
      } else {
         if (currentView === 'landing' || currentView === 'login') setCurrentView('student-dashboard');
      }
    } else {
      // If user logs out or isn't authenticated
      if (currentView !== 'landing' && currentView !== 'login') {
        setCurrentView('landing');
      }
    }
  }, [user, loading]);

  const handleNavigate = (view: ViewState) => {
    // Prevent unauthenticated access to dashboards
    if (!user && view !== 'landing' && view !== 'login') {
      setCurrentView('login');
      return;
    }
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB]">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  // Public Routes
  if (currentView === 'landing') {
    return <LandingPage onNavigate={handleNavigate} />;
  }
  
  if (currentView === 'login') {
    return <LoginPage onNavigate={handleNavigate} />;
  }

  // Protected Routes
  let role: 'admin' | 'student' | 'super-admin' = 'student';
  
  // Determine role for UI layout based on View or User Email (Fallback)
  if (currentView.startsWith('super-admin') || user?.email?.includes('superadmin')) {
    role = 'super-admin';
  } else if (currentView.startsWith('admin') || user?.email?.includes('admin')) {
    role = 'admin';
  }

  return (
    <DashboardLayout 
      role={role} 
      currentView={currentView}
      onNavigate={handleNavigate}
    >
      {/* Admin Views */}
      {currentView === 'admin-dashboard' && <AdminDashboard onNavigate={handleNavigate} />}
      {currentView === 'admin-test-builder' && <TestBuilder onNavigate={handleNavigate} />}
      {currentView === 'admin-question-bank' && (
        <div className="flex flex-col items-center justify-center h-96 text-gray-500">
          <p className="text-lg">Question Bank Module Loading...</p>
        </div>
      )}
      
      {/* Student Views */}
      {currentView === 'student-dashboard' && <StudentDashboard onNavigate={handleNavigate} />}
      {currentView === 'student-test' && (
         <div className="flex flex-col items-center justify-center h-96 text-gray-500">
          <p className="text-lg">Test Player Module Loading...</p>
          <button 
            onClick={() => handleNavigate('student-dashboard')}
            className="mt-4 text-primary font-medium hover:underline"
          >
            Back to Dashboard
          </button>
        </div>
      )}

      {/* Super Admin Views */}
      {currentView === 'super-admin-dashboard' && <SuperAdminDashboard onNavigate={handleNavigate} />}
      {currentView === 'super-admin-centers' && <SuperAdminCenters onNavigate={handleNavigate} />}
      
    </DashboardLayout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
