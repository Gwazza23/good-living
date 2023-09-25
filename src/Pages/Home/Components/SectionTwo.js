import "./SectionTwo.css";
import { popularItems } from "../../../Util/Items";

function SectionTwo() {
  return (
    <div className="section-two-container">
      <h2>Popular Products</h2>
      <div className="carousel">
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
  );
}

export default SectionTwo;
