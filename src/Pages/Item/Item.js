import "./Item.css";
import { useParams } from "react-router-dom";
import { items } from "../../Util/Items";

function Item() {
  const { id } = useParams();

  const All = items.find((item) => item.name === "All");
  const allItems = items.reduce((accumulator, current) => {
    if (current !== All) {
      accumulator.push(...current.items);
    }
    return accumulator;
  }, []);
  All.items = allItems;

  const item = All.items.find((item) => item.id.toString() === id);

  return (
    <div className="item-container">
      <h1>{item.name}</h1>
      <div className="item-section" >
        <div className="item-img-container">
          <img src={item.src} alt={item.name} />
        </div>
        <div className="item-info-container"></div>
      </div>
    </div>
  );
}

export default Item;
