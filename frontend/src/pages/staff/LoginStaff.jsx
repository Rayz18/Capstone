import { useState } from 'react';
import api from "../../api";  // Stay on the same level for api.js
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";  // Same level
import { useNavigate } from 'react-router-dom';
import "../../styles/staff/LoginStaff.css";  // Correct path to staff folder

const LoginStaff = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/token/', { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate('/staff/dashboard');
    } catch (error) {
      console.error(error); // Log the error to the console
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginStaff;
