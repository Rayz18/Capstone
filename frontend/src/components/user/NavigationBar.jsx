import { useState } from "react";
import "../../styles/user/NavigationBar.css";  // Correct path
import ProfilePopup from "./ProfilePopup";  // Same level
import logoBSU from "../../assets/photos/BSU.png";  // Go up two levels to access assets
import logoGAD from "../../assets/photos/GAD.png";  // Same as above
import icon from "../../assets/photos/icon.png";  // Same as above

function NavigationBar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        {/* Adding both logos with appropriate class names */}
        <img src={logoBSU} alt="BSU Logo" className="logo" />
        <img src={logoGAD} alt="GAD Logo" className="logo" />
        <div className="nav-titles">
          {/* Adding both nav titles */}
          <span className="nav-title main-title">BATANGAS STATE UNIVERSITY - THE NATIONAL ENGINEERING UNIVERSITY</span>
          <span className="nav-title sub-title">Gender and Development Unit</span>
        </div>
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
        <img src={icon} alt="Profile" className="profile" />
      </div>
      {showPopup && <ProfilePopup />}
    </nav>
  );
}

export default NavigationBar;
