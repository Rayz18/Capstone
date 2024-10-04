import { useEffect, useState } from 'react';
import api from '../../api';
import '../../styles/admin/StaffManagement.css';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await api.get('/api/admin/staff/');
        setStaffList(response.data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };
    fetchStaff();
  }, []);

    const handleCreateStaff = async () => {
    try {
      const response = await api.post('/api/admin/staff/', { username, password });
      setStaffList([...staffList, response.data]);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error creating staff:', error);
    }
  };

    const handleDeleteStaff = async (id) => {
    try {
      await api.delete(`/api/admin/staff/${id}/`);
      setStaffList(staffList.filter((staff) => staff.id !== id));
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  return (
    <div className="staff-management">
      <h1>Staff Account Management</h1>
      <div className="staff-create-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleCreateStaff}>Create Staff</button>
      </div>
      <ul className="staff-list">
        {staffList.map((staff) => (
          <li key={staff.id}>
            {staff.username}
            <button onClick={() => handleDeleteStaff(staff.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffManagement;
