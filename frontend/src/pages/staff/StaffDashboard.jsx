import { useState } from 'react';
import api from "../../api";  // Stay on the same level for api.js
import "../../styles/staff/StaffDashboard.css";  // Correct path

const StaffDashboard = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/content/create/', { title, body });  // No need to store 'res'
      alert('Content created successfully');
    } catch (error) {
      console.error(error);  // Optionally log the error
      alert('Failed to create content');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Create New Content</h1>
      <form className="content-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="Body" 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StaffDashboard;
