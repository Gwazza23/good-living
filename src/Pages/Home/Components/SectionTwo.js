import "./SectionTwo.css";
import { popularItems } from "../../../Util/Items";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SectionTwo() {
  const trackRef = useRef(null);
  const navigate = useNavigate();

  function navigateTo(id) {
    navigate(`/product/${id}`);
  }

  function handleMoueEnter() {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  }
  function handleMouseLeave() {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  }

  function scroll() {
    let track = document.querySelector(".carousel--track");
    let row = document.querySelector(".carousel-row");

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
        <div className="carousel--track" ref={trackRef}>
          <div className="carousel-row">
            {popularItems.map((item) => {
              return (
                <div
                  className="item"
                  onMouseEnter={handleMoueEnter}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                  onClick={() => {
                    navigateTo(item.id);
                  }}
                >
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
