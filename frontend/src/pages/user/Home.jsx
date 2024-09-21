import Slider from "../../components/user/Slider";  // Go up one level to access components
import NavigationBar from "../../components/user/NavigationBar";  // Same as above
import "../../styles/user/Home.css";  // Correct path to styles

const Home = () => {
  const images = [
    "/assets/photos/A.jpg",
    "/assets/photos/B.jpg",
    "/assets/photos/C.jpg",
  ];

  return (
    <div className="home-container">
      <NavigationBar /> {/* Use the NavigationBar component */}
      <Slider images={images} />
    </div>
  );
};

export default Home;
