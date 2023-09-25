import "./SectionOne.css";
import { Link } from "react-router-dom";

function SectionOne() {
  return (
    <div className="section-one-container">
      <Link to={"/products/home-decor"} className="section-area a1">
        <p>Home Décor</p>
      </Link>
      <Link to={"/products/kitchen-and-dining"} className="section-area a2">
        <p>Kitchen & Dining</p>
      </Link>
      <Link to={"/products/bedroom-and-bathroom"} className="section-area a3">
        <p>Bedroom & Bathroom</p>
      </Link>
      <Link to={"/products/outdoor-and-garden"} className="section-area a4">
        <p>Outdoor & Garden</p>
      </Link>
      <Link to={"/products/appliances"} className="section-area a5">
        <p>Appliances</p>
      </Link>
      <Link
        to={"/products/cleaning-and-organization"}
        className="section-area a6"
      >
        <p>Cleaning & Organization</p>
      </Link>
    </div>
  );
}

export default SectionOne;
