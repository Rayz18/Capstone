import { useState } from 'react';
import backButtonImage from '../../assets/photos/backbutton.png';
import "../../styles/staff/CampaignManagement.css";
import Images from './Images';
import Videos from './Videos';
import Infographics from './Infographics';
import Materials from './Materials';
import OfferedActivities from './OfferedActivities';

const CampaignManagement = () => {
  const [currentView, setCurrentView] = useState('campaign');
  const [isAddingCampaign, setIsAddingCampaign] = useState(false);

  return (
    <div className="dashboard-content">
      {['images', 'infographics', 'videos', 'materials', 'activities'].includes(currentView) ? (
        <div className="back-button-container" style={{ marginBottom: '20px' }}>
          <button className="back-button" onClick={() => setCurrentView('campaign')}>
            <img src={backButtonImage} alt="Back Button" className="back-button-image" />
            <span className="back-button-text">Go Back</span>
          </button>
          {currentView === 'images' && <Images />}
          {currentView === 'infographics' && <Infographics />}
          {currentView === 'videos' && <Videos />}
          {currentView === 'materials' && <Materials />}
          {currentView === 'activities' && <OfferedActivities />}
        </div>
      ) : currentView === 'campaign' && (
        <>
          {!isAddingCampaign ? (
            <>
              <p className="grey-text">No available campaign as of the moment...</p>
              <button className="add-campaign-button" onClick={() => setIsAddingCampaign(true)}>
                Add Campaign
              </button>
            </>
          ) : (
            <div className="campaign-form-container">
              <div className="back-button-container">
                <button className="back-button" onClick={() => setIsAddingCampaign(false)}>
                  <img src={backButtonImage} alt="Back Button" className="back-button-image" />
                  <span className="back-button-text">Go Back</span>
                </button>
              </div>
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

              <div className="file-buttons-container">
                <button className="file-button" onClick={() => setCurrentView('images')}>Images</button>
                <button className="file-button" onClick={() => setCurrentView('infographics')}>Infographics</button>
                <button className="file-button" onClick={() => setCurrentView('videos')}>Videos</button>
                <button className="file-button" onClick={() => setCurrentView('materials')}>Materials</button>
                <button
                  className="related-activities-button file-button"
                  onClick={() => setCurrentView('activities')}
                >
                  Offered Activities
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CampaignManagement;
