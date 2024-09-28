import { useState } from 'react';
import StaffNavigationBar from "../../components/staff/StaffNavigationBar";
import ProgramManagement from "../../pages/staff/ProgramManagement";
import CampaignManagement from "../../pages/staff/CampaignManagement";
import "../../styles/staff/StaffDashboard.css";

const StaffDashboard = () => {
  const [currentView, setCurrentView] = useState('program'); // Default view to 'program'

  // Function to handle navigation bar clicks
  const handleNavigationClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="dashboard-container">
      <StaffNavigationBar currentView={currentView} handleNavigationClick={handleNavigationClick} />
      <div className="dashboard-content">
        {currentView === 'program' && <ProgramManagement />}
        {currentView === 'campaign' && <CampaignManagement />}
      </div>
    </div>
  );
};

export default StaffDashboard;
