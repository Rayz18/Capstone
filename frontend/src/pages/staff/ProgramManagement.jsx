import { useState } from 'react';
import "../../styles/staff/ProgramManagement.css";
import api from '../../api'; // Axios instance

const ProgramManagement = () => {
  const [isAddingProgram, setIsAddingProgram] = useState(false);
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleAddProgramClick = () => {
    setIsAddingProgram(true);
  };

  const handleFormClose = () => {
    setIsAddingProgram(false);
  };

  const handleSubmit = async () => {
    if (!title || !photo) {
      alert('Please provide both the title and a photo.');
      return;
    }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('photo', photo);

    try {
      console.log("Submitting with formData:", { title, photo });
      
      const response = await api.post('/api/programs/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Program added successfully:', response.data);
      // After successfully adding the program, close the popup
      setIsAddingProgram(false);
      // Clear input fields after submission
      setTitle('');
      setPhoto(null);
    } catch (error) {
      console.error('Error adding program:', error);
      alert('Failed to add program. Please try again.');
   
   // Network error or server error
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        alert(`Server error: ${error.response.data}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Network error: No response from server');
      } else {
        console.error('Error setting up request:', error.message);
        alert(`Unexpected error: ${error.message}`);
      }
    }
  };

  return (
    <div className="program-management-container">
      <button className="add-program-button" onClick={handleAddProgramClick}>
        Add New Program
      </button>

      {isAddingProgram && (
        <div className="program-form-overlay">
          <div className="program-form-container">
            <button className="close-button" onClick={handleFormClose}>X</button>
            <h2>Add New Program</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="photo">Poster Photo:</label>
            <input
              type="file"
              id="photo"
              onChange={(e) => setPhoto(e.target.files[0])}
            />

            <button className="submit-button" onClick={handleSubmit}>
              Add Program
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramManagement;
