import SectionOne from "./Components/SectionOne";
import SectionThree from "./Components/SectionThree";
import SectionTwo from "./Components/SectionTwo";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-section-one">
        <SectionOne />
      </div>
      <div className="home-section-two" >
        <SectionTwo />
      </div>
      <div className="home-section-three">
        <SectionThree />
      </div>
    </div>
  );
}

export default Home;
