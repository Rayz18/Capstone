import "../styles/ProfilePopup.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const ProfilePopup = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    // Check if the user is logged in by checking the presence of the access token
    const token = localStorage.getItem("access");
    setIsLoggedIn(!!token);
  }, []);


  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };


  return (
    <div className="profile-popup">
      <p>User details will be added here...</p>
      {!isLoggedIn ? (
        <>
          <button
            className="popup-button"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
          <button
            className="popup-button"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </>
      ) : (
        <button className="popup-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};


export default ProfilePopup;