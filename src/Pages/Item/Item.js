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

  return <div className="item-container">Item</div>;
}

export default Item;
