import PropTypes from 'prop-types';
import "../../styles/staff/StaffNavigationBar.css";  // Ensure staff-specific path

const StaffNavigationBar = ({ currentView, handleNavigationClick }) => {
  return (
    <nav className="staff-navigation-bar">
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
            onClick={() => handleNavigationClick('campaign')}
            className={currentView === 'campaign' ? 'staff-active' : ''}
          >
            Campaign Management
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Add prop types validation
StaffNavigationBar.propTypes = {
  currentView: PropTypes.string.isRequired,
  handleNavigationClick: PropTypes.func.isRequired,
};

export default StaffNavigationBar;
