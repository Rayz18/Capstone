import { useState } from "react";
import "../styles/NavigationBar.css";
import ProfilePopup from "./ProfilePopup"; // Import the ProfilePopup component
import logo from "../assets/photos/logo.png"; // Correctly importing logo
import icon from "../assets/photos/icon.png"; // Correctly importing icon


function NavigationBar() {
  const [showPopup, setShowPopup] = useState(false);


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        {/* Use the imported logo variable instead of a static path */}
        <img src={logo} alt="Logo" className="logo" />
        <span className="nav-title">GENDER AND DEVELOPMENT UNIT</span>
      </div>
      <ul className="nav-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/program">Program</a></li>
        <li><a href="/advocacy-campaign">Advocacy Campaign</a></li>
        <li><a href="/certificate">Certificate</a></li>
        <li><a href="/connect-with-us">Connect With Us</a></li>
      </ul>
      <div className="profile-icon" onClick={togglePopup}>
        {/* Use the imported icon variable instead of a static path */}
        <img src={icon} alt="Profile" className="profile" />
      </div>
      {showPopup && <ProfilePopup />}
    </nav>
  );
}


export default NavigationBar;