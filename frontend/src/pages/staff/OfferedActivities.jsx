import { useState } from 'react';
import "../../styles/staff/OfferedActivities.css";

const OfferedActivities = () => {
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

  const handleSaveActivity = (index, newValue) => {
    const newActivities = [...activities];
    newActivities[index] = { text: newValue, editable: false };
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
    <div className="related-offered-activities-page">
      <div className="related-activities-title">OFFERED ACTIVITIES</div>
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
                    value={activity.text}
                    onChange={(e) => handleSaveActivity(index, e.target.value)}
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
  );
};

export default OfferedActivities;
