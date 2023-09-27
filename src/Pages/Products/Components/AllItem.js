import React from "react";
import { items } from "../../../Util/Items";
import { Link } from "react-router-dom";

function AllItem() {
  //Grab the All Items object in the Items array
  const All = items.find((item) => item.name === "All");

  // Use reduce to push all items in other categories into a new array
  const allItems = items.reduce((accumulator, current) => {
    if (current !== All) {
      accumulator.push(...current.items);
    }
    return accumulator;
  }, []);

  // set the items object in the All object to the Array containing all the items
  All.items = allItems;

  return (
    <div className="products-container">
      {All.items.map((item) => {
        return (
          <Link to={`/product/${item.id}`} className="product" key={item.id}>
            <img loading="lazy" src={item.src} alt={item.name} />
            <h4>{item.name}</h4>
            <p>£{item.price}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default AllItem;
