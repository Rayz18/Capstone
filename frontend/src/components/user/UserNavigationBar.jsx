import { useState } from "react";
import "../../styles/user/UserNavigationBar.css";  // Correct path
import ProfilePopup from "./ProfilePopup";  // Same level
import logoBSU from "../../assets/photos/BSU.png";  // Go up two levels to access assets
import logoGAD from "../../assets/photos/GAD.png";  // Same as above
import icon from "../../assets/photos/icon.png";  // Same as above

function UserNavigationBar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="user-navigation-bar"> {/* Renamed for specificity */}
      <div className="user-nav-logo">
        <img src={logoBSU} alt="BSU Logo" className="user-logo" />
        <img src={logoGAD} alt="GAD Logo" className="user-logo" />
        <div className="user-nav-titles">
          <span className="user-nav-title main-title">BATANGAS STATE UNIVERSITY - THE NATIONAL ENGINEERING UNIVERSITY</span>
          <span className="user-nav-title sub-title">Gender and Development Unit</span>
        </div>
      </div>
      <ul className="user-nav-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/program">Program</a></li>
        <li><a href="/advocacy-campaign">Advocacy Campaign</a></li>
        <li><a href="/certificate">Certificate</a></li>
        <li><a href="/connect-with-us">Connect With Us</a></li>
      </ul>
      <div className="user-profile-icon" onClick={togglePopup}>
        <img src={icon} alt="Profile" className="user-profile" />
      </div>
      {showPopup && <ProfilePopup />}
    </nav>
  );
}

export default UserNavigationBar;
