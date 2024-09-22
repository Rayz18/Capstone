import { useState } from 'react';
import logo from '../assets/photos/GAD.png'; // Ensure the correct path
import backButtonImage from '../assets/photos/backbutton.png'; // Ensure the correct path for back button image
import '../styles/StaffDashboard.css';

const StaffDashboard = () => {
  const [currentView, setCurrentView] = useState(null);
  const [isAddingCampaign, setIsAddingCampaign] = useState(false);

  const handleNavigationClick = (view) => {
    setCurrentView(view);
    setIsAddingCampaign(false);
  };

  const handleAddCampaignClick = () => {
    setIsAddingCampaign(true);
  };

  const handleBackClick = () => {
    setIsAddingCampaign(false);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <img src={logo} alt="GAD Logo" className="logo" />
          <div className="text-section">
            <h2>Batangas State University - The National Engineering University</h2>
            <h3>Staff Dashboard - Gender and Development</h3>
          </div>
        </div>
        <nav className="navigation-bar">
          <ul className="nav-menu">
            <li>
              <a
                href="#"
                onClick={() => handleNavigationClick('program')}
                className={currentView === 'program' ? 'active' : ''}
              >
                Program Management
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigationClick('campaign')}
                className={currentView === 'campaign' ? 'active' : ''}
              >
                Campaign Management
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="dashboard-content">
        {currentView === 'program' && <p>This is the Program Management Page, Welcome!</p>}
        {currentView === 'campaign' && !isAddingCampaign && (
          <>
            <p className="grey-text">No available campaign as of the moment...</p>
            <button className="add-campaign-button" onClick={handleAddCampaignClick}>
              Add Campaign
            </button>
          </>
        )}
        {currentView === 'campaign' && isAddingCampaign && (
          <div className="campaign-form-container">
            <button className="back-button" onClick={handleBackClick}>
              <img src={backButtonImage} alt="Back Button" className="back-button-image" />
              <span className="back-button-text">Go back</span>
            </button>
            <div className="campaign-form">
              <label htmlFor="title">Campaign Title:</label>
              <input type="text" id="title" name="title" />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description"></textarea>

              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" />

              <label htmlFor="photo">Insert Photo:</label>
              <input type="file" id="photo" name="photo" accept="image/*" />

              <button type="submit" className="submit-button">Set Campaign</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;
