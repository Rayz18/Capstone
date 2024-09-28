import { useState } from 'react';
import UserNavigationBar from "../../components/user/UserNavigationBar"; 
import "../../styles/user/AboutUs.css";
import genderImage from '../../assets/photos/Gender.jpg';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('goals');

  return (
    <div className="about-us-container">
      <UserNavigationBar />
      
      {/* Updated Header to Remove Pointed Edge */}
      <div className="header-image-container">
        <img src={genderImage} alt="Header" className="header-image full-width-header" /> 
      </div>

      <div className="content-container">
        <div className="sidebar">
          <div className="sidebar-header">
            ABOUT US
          </div>
          <ul>
            <li onClick={() => setActiveSection('goals')}>Goals</li>
            <li onClick={() => setActiveSection('organization-profile')}>Organization Profile</li>
            <li onClick={() => setActiveSection('privacy-notice')}>Privacy Notice</li>
            <li onClick={() => setActiveSection('laws-and-policies')}>Laws and Policies</li>
          </ul>
        </div>

        <div className="main-content">
          {activeSection === 'goals' && (
            <div className="section-container">
              <div className="goals-section">
                <h2>GOALS</h2>
                <p>
                  The Gender and Development Unit at Batangas State University aims to promote gender equality through policies, programs, and initiatives that empower women and men alike.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'organization-profile' && (
            <div className="section-container">
              <div className="about-gender-development-section"> {/* Added class for border */}
                <h2>About Gender and Development</h2>
                <p>
                  The Gender and Development (GAD) Unit seeks to address the various needs and issues related to gender equality, creating an inclusive environment for everyone at Batangas State University.
                </p>
                <p>
                  Our goal is to mainstream gender issues and promote gender-responsive governance through active collaboration with different university units and external partners.
                </p>
              </div>

              <div className="gad-plan-budget-section section-container">
                <h2>GAD Plan and Budget</h2>
                <p>
                  Our GAD Plan and Budget includes strategic initiatives to address gender issues through sustainable projects and capacity-building activities.
                </p>
              </div>

              <div className="gad-focal-person-system-section section-container">
                <h2>GAD Focal Person System</h2>
                <p>
                  The GAD Focal Person System is established to coordinate and implement gender programs within various university departments.
                </p>
              </div>

              <div className="project-activity-program-section section-container">
                <h2>Project, Activity, and Program</h2>
                <p>
                  A variety of projects, activities, and programs are organized to address gender issues and advocate for equality within the campus and community.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'privacy-notice' && (
            <div className="section-container">
              <div className="privacy-notice-section">
                <h2>PRIVACY NOTICE</h2>
                <p>
                  Our privacy notice outlines the information we collect, how it is used, and the steps we take to ensure the protection of your data.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'laws-and-policies' && (
            <div className="section-container">
              <div className="laws-and-policies-section">
                <h2>LAWS AND POLICIES</h2>
                <p>
                  Learn more about the national laws and institutional policies supporting gender equality and development.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );  
}

export default AboutUs;
