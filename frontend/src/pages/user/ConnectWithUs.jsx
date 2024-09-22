import React from 'react';
import UserNavigationBar from '../../components/user/UserNavigationBar'; // Import the NavigationBar component
import '../../styles/user/ConnectWithUs.css'; // Ensure this CSS file exists

const ConnectWithUs = () => {
    return (
        <div className="connect-container">
            {/* Replace the hardcoded nav with your NavigationBar component */}
            <UserNavigationBar/> 

            <div className="content">
                <h1 className="title">Contact Us</h1>

                <section className="location-section">
                    <div className="location">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipMgKEy0eNkfBl73aw1UJSrHNUFwUZpyaNo1gk8A=s1360-w1360-h1020" alt="Batangas State University - Alangilan Campus" />
                        <div className="location-details">
                            <h2>BATANGAS STATE UNIVERSITY - ALANGILAN CAMPUS</h2>
                            <p>Q3MF+JQJ, Batangas</p>
                            {/* Clickable Email Link */}
                            <p>
                                <a href="mailto:gad@g.batstate-u.edu.ph">gad@g.batstate-u.edu.ph</a>
                            </p>
                            <h3>Vicinity Map</h3>
                            <a href="https://www.google.com/maps/place/Batangas+State+University+-+Alangilan+Campus" target="_blank" rel="noopener noreferrer">
                            </a>
                            <iframe
                                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Q3MF+JQJ,%20Batangas+(Batangas%20State%20University%20Alangilan%20campus)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="800"
                                height="240"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Alangilan Campus Map"
                            ></iframe>
                        </div>
                    </div>

                    <div className="location">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipO0R1UqV2DNU9o086db7Il4CYwO5q0HTWDqS6tI=w408-h306-k-no" alt="Batangas State University - Pablo Borbon" />
                        <div className="location-details">
                            <h2>BATANGAS STATE UNIVERSITY - PABLO BORBON</h2>
                            <p>12 Rizal Ave, Poblacion, Batangas, 4200 Batangas</p>
                            {/* Clickable Email Link */}
                            <p>
                                <a href="mailto:gad@g.batstate-u.edu.ph">gad@g.batstate-u.edu.ph</a>
                            </p>
                            <h3>Vicinity Map</h3>
                            <a href="https://www.google.com/maps/place/Batangas+State+University+-+Pablo+Borbon+Main+Campus+I" target="_blank" rel="noopener noreferrer">
                            </a>
                            <iframe
                                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Batangas%20State%20University%20Pablo%20Borbon%20Main%201+(Batangas%20State%20University%20Pablo%20Borbon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="800"
                                height="240"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pablo Borbon Campus Map"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <p>BATANGAS STATE UNIVERSITY - THE NATIONAL ENGINEERING UNIVERSITY GENDER AND DEVELOPMENT UNIT</p>
                    <div className="footer-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ConnectWithUs;
