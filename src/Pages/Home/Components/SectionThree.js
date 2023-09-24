import "./SectionThree.css";
import { Link } from "react-router-dom";

function SectionThree() {
  return (
    <div className="section-three-container">
      <div className="banner-container">
        <div>
          <h3>Where Style Meets Comfort</h3>
          <p>
            Explore our diverse collection of high-quality products for every
            need and preference
          </p>
          <Link>Shop Now</Link>
        </div>
      </div>
      <img loading="lazy" src="media/living-room.jpg" alt="living room" />
    </div>
  );
}

export default SectionThree;
