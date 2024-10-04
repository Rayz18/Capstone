import { useState } from 'react';
import api from "../../api"; // Axios instance for making requests
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { useNavigate } from 'react-router-dom';
import "../../styles/admin/LoginAdmin.css"; // Assuming you want separate styles for the admin login

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/token/', { email, password });
      // Assuming you will only allow superusers to log in
      const { is_superuser } = res.data;
      if (!is_superuser) {
        throw new Error('Unauthorized: Admin access only');
      }
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate('/custom-admin/dashboard');
    } catch (error) {
      console.error(error);
      alert("Invalid credentials or unauthorized access.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-login-form">
      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginAdmin;
