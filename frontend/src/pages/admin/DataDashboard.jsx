import { useEffect, useState } from 'react';
import api from '../../api';
import '../../styles/admin/DataDashboard.css';

const DataDashboard = () => {
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get('/api/admin/dashboard/');
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <div className="data-dashboard">
      <h1>Data Dashboard</h1>
      <p>Total Staff: {dashboardData.total_staff}</p>
      <p>Total Content: {dashboardData.total_content}</p>
      <p>Total Programs: {dashboardData.total_programs}</p>
    </div>
  );
};

export default DataDashboard;
