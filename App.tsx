import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/AdminDashboard';
import TestBuilder from './pages/TestBuilder';
import StudentDashboard from './pages/StudentDashboard';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  if (currentView === 'landing') {
    return <LandingPage onNavigate={handleNavigate} />;
  }

  const role = currentView.startsWith('admin') ? 'admin' : 'student';

  return (
    <DashboardLayout 
      role={role} 
      currentView={currentView}
      onNavigate={handleNavigate}
    >
      {currentView === 'admin-dashboard' && <AdminDashboard onNavigate={handleNavigate} />}
      {currentView === 'admin-test-builder' && <TestBuilder onNavigate={handleNavigate} />}
      {currentView === 'admin-question-bank' && (
        <div className="flex flex-col items-center justify-center h-96 text-gray-500">
          <p className="text-lg">Question Bank Module Loading...</p>
        </div>
      )}
      
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
    </DashboardLayout>
  );
};

export default App;