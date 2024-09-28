import { useState } from 'react';
import logo from '../../assets/photos/GAD.png';
import backButtonImage from '../../assets/photos/backbutton.png';
import StaffNavigationBar from '../../components/staff/StaffNavigationBar'; 
import "../../styles/staff/StaffDashboard.css";

const StaffDashboard = () => {
  const [currentView, setCurrentView] = useState(null);
  const [isAddingCampaign, setIsAddingCampaign] = useState(false);
  const [showRelatedActivitiesPage, setShowRelatedActivitiesPage] = useState(false);
  const [activities, setActivities] = useState([]);
  const [recycleBin, setRecycleBin] = useState([]);

  const handleAddActivity = () => {
    setActivities([...activities, { text: '', editable: true }]);
  };

  const handleEditActivity = (index) => {
    const newActivities = [...activities];
    newActivities[index].editable = true;
    setActivities(newActivities);
  };

  const handleSaveActivity = (index, text) => {
    const newActivities = [...activities];
    newActivities[index] = { text, editable: false };
    setActivities(newActivities);
  };

  const handleDeleteActivity = (index) => {
    const activityToDelete = activities[index];
    setRecycleBin([...recycleBin, activityToDelete]);
    const newActivities = activities.filter((_, i) => i !== index);
    setActivities(newActivities);
  };

  const handleRetrieveActivity = (index) => {
    const activityToRetrieve = recycleBin[index];
    setActivities([...activities, activityToRetrieve]);
    const newRecycleBin = recycleBin.filter((_, i) => i !== index);
    setRecycleBin(newRecycleBin);
  };

  const handlePermanentDelete = (index) => {
    const newRecycleBin = recycleBin.filter((_, i) => i !== index);
    setRecycleBin(newRecycleBin);
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
        <StaffNavigationBar currentView={currentView} handleNavigationClick={setCurrentView} />
      </header>
      <div className="dashboard-content">
        {showRelatedActivitiesPage ? (
          <div className="related-offered-activities-page">
            <div className="back-button-container">
              <button className="back-button" onClick={() => setShowRelatedActivitiesPage(false)}>
                <img src={backButtonImage} alt="Back Button" className="back-button-image" />
                <span className="back-button-text">Go Back</span>
              </button>
            </div>
            <div className="related-activities-title">
              OFFERED ACTIVITIES
            </div>
            <button className="plus-button" onClick={handleAddActivity}>+</button>

            <table className="activity-table">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Activity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {activity.editable ? (
                        <textarea
                          className="activity-textarea"
                          defaultValue={activity.text}
                          onBlur={(e) => handleSaveActivity(index, e.target.value)}
                        />
                      ) : (
                        <span className="activity-content">{activity.text}</span>
                      )}
                    </td>
                    <td className="activity-buttons">
                      {activity.editable ? (
                        <button className="add-button" onClick={() => handleSaveActivity(index, activity.text)}>Add</button>
                      ) : null}
                      <button className="edit-button" onClick={() => handleEditActivity(index)}>Edit</button>
                      <button className="delete-button" onClick={() => handleDeleteActivity(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {recycleBin.length > 0 && (
              <div className="recycle-bin">
                <h3>Recycle Bin</h3>
                {recycleBin.map((item, index) => (
                  <div key={index} className="recycle-bin-item">
                    <span>{item.text}</span>
                    <button onClick={() => handleRetrieveActivity(index)}>Retrieve</button>
                    <button onClick={() => handlePermanentDelete(index)}>Delete Completely</button>
                  </div>
                ))} 
              </div>
            )}
          </div>
        ) : currentView === 'images' ? (
          <div className="back-button-container" style={{ marginBottom: '20px' }}>
            <button className="back-button" onClick={() => setCurrentView('campaign')}>
              <img src={backButtonImage} alt="Back Button" className="back-button-image" />
              <span className="back-button-text">Go Back</span>
            </button>
          </div>
        ) : currentView === 'infographics' ? (
          <div className="back-button-container" style={{ marginBottom: '20px' }}>
            <button className="back-button" onClick={() => setCurrentView('campaign')}>
              <img src={backButtonImage} alt="Back Button" className="back-button-image" />
              <span className="back-button-text">Go Back</span>
            </button>
          </div>
        ) : currentView === 'videos' ? (
          <div className="back-button-container" style={{ marginBottom: '20px' }}>
            <button className="back-button" onClick={() => setCurrentView('campaign')}>
              <img src={backButtonImage} alt="Back Button" className="back-button-image" />
              <span className="back-button-text">Go Back</span>
            </button>
          </div>
        ) : currentView === 'materials' ? (
          <div className="back-button-container" style={{ marginBottom: '20px' }}>
            <button className="back-button" onClick={() => setCurrentView('campaign')}>
              <img src={backButtonImage} alt="Back Button" className="back-button-image" />
              <span className="back-button-text">Go Back</span>
            </button>
          </div>
        ) : (
          <>
            {currentView === 'program' && (
              <p>This is the Program Management Page, Welcome!</p>
            )}
            {currentView === 'campaign' && !isAddingCampaign && (
              <>
                <div className="back-button-container" style={{ marginLeft: '20px' }}> {/* Adjusted margin-left */}
                  <button className="back-button" onClick={() => setCurrentView(null)}>
                    <img src={backButtonImage} alt="Back Button" className="back-button-image" />
                    <span className="back-button-text">Go Back</span>
                  </button>
                </div>
                <p className="grey-text">No available campaign as of the moment...</p>
                <button className="add-campaign-button" onClick={() => setIsAddingCampaign(true)}>
                  Add Campaign
                </button>
              </>
            )}
            {currentView === 'campaign' && isAddingCampaign && (
              <div className="campaign-form-container">
                <div className="back-button-container">
                  <button className="back-button" onClick={() => setIsAddingCampaign(false)}>
                    <img src={backButtonImage} alt="Back Button" className="back-button-image" />
                    <span className="back-button-text">Go back</span>
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
                    onClick={() => setShowRelatedActivitiesPage(true)}
                  >
                    Offered Activities
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;