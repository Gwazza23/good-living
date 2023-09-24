import "./SectionTwo.css";
import { popularItems } from "../../../Util/Items";
import { useEffect } from "react";

function SectionTwo() {
  function scroll() {
    const track = document.querySelector(".carousel-track");
    const row = document.querySelector(".carousel-row");

    let clonedRow = row.cloneNode(true);
    track.appendChild(clonedRow);
  }
  useEffect(() => {
    scroll();
  }, []);
  return (
    <div className="section-two-container">
      <h2>Popular Products</h2>
      <div className="carousel">
        <div className="carousel-track">
          <div className="carousel-row">
            {popularItems.map((item) => {
              return (
                <div className="item">
                  <img loading="lazy" src={item.src} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>£{item.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
