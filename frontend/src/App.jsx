import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Home from "./pages/user/Home";
import NotFound from "./pages/common/NotFound";
import AboutUs from "./pages/user/AboutUs";
import Program from "./pages/user/Program";
import AdvocacyCampaign from "./pages/user/AdvocacyCampaign";
import Certificate from "./pages/user/Certificate";
import ConnectWithUs from "./pages/user/ConnectWithUs";
import LoginStaff from "./pages/staff/LoginStaff";  // Import the LoginStaff component
import StaffDashboard from "./pages/staff/StaffDashboard";  // Import the StaffDashboard component
import ProtectedRoute from "./components/common/ProtectedRoute";  // Import ProtectedRoute
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page is the default landing page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/program" element={<Program />} />
        <Route path="/advocacy-campaign" element={<AdvocacyCampaign />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/connect-with-us" element={<ConnectWithUs />} />
        <Route path="*" element={<NotFound />} />

        {/* New routes for staff login and dashboard */}
        <Route path="/staff/login" element={<LoginStaff />} /> {/* Staff login page */}
        <Route 
          path="/staff/dashboard" 
          element={
            <ProtectedRoute>
              <StaffDashboard />
            </ProtectedRoute>
          } 
        /> {/* Staff dashboard, protected by authentication */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
