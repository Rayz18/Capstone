import { useState } from 'react';
import "../../styles/admin/AdminDashboard.css"; // Admin styles
import StaffManagement from '../../pages/admin/StaffManagement';
import ContentModeration from '../../pages/admin/ContentModeration';
import DataDashboard from '../../pages/admin/DataDashboard';
import '../../styles/admin/AdminDashboard.css';

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState('staff');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <button onClick={() => handleNavigation('staff')}>Staff Management</button>
        <button onClick={() => handleNavigation('content')}>Content Moderation</button>
        <button onClick={() => handleNavigation('dashboard')}>Data Dashboard</button>
      </nav>
      <div className="admin-content">
        {currentView === 'staff' && <StaffManagement />}
        {currentView === 'content' && <ContentModeration />}
        {currentView === 'dashboard' && <DataDashboard />}
      </div>
    </div>
  );
};

export default AdminDashboard;
