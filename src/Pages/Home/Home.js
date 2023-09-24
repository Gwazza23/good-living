import SectionOne from "./Components/SectionOne";
import SectionThree from "./Components/SectionThree";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-section-one">
        <SectionOne />
      </div>
      <div className="home-section-two">
        <SectionThree />
      </div>
    </div>
  );
}

export default Home;
