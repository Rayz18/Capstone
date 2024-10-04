import PropTypes from 'prop-types';
import "../../styles/staff/StaffNavigationBar.css";
import logoBSU from "../../assets/photos/BSU.png";
import logoGAD from "../../assets/photos/GAD.png";

const StaffNavigationBar = ({ currentView, handleNavigationClick }) => {
  return (
    <nav className="staff-navigation-bar">
      <div className="staff-nav-logo">
        <img src={logoBSU} alt="BSU Logo" className="staff-logo" />
        <img src={logoGAD} alt="GAD Logo" className="staff-logo" />
        <div className="staff-nav-titles">
          <span className="staff-nav-title main-title">BATANGAS STATE UNIVERSITY - THE NATIONAL ENGINEERING UNIVERSITY</span>
          <span className="staff-nav-title sub-title">Gender and Development Unit</span>
        </div>
      </div>
      <ul className="staff-nav-menu">
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick('program')}
            className={currentView === 'program' ? 'staff-active' : ''}
          >
            Program Management
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick('content-dashboard')}
            className={currentView === 'content-dashboard' ? 'staff-active' : ''}
          >
            Content Dashboard
          </a>
        </li>
      </ul>
    </nav>
  );
};

StaffNavigationBar.propTypes = {
  currentView: PropTypes.string.isRequired,
  handleNavigationClick: PropTypes.func.isRequired,
};

export default StaffNavigationBar;
