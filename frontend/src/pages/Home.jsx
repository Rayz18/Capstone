import Slider from "../components/Slider";
import NavigationBar from "../components/NavigationBar";
import "../styles/Home.css";

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
