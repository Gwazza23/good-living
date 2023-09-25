import { useState } from "react";
import "./Header.css";

function Header({ items, setProducts }) {
  const [title, setTitle] = useState("All");
  return (
    <div className="header-container">
      <h2>{title}</h2>
      <ul>
        {items.map((category) => {
          return (
            <li
              key={category.id}
              onClick={() => {
                setTitle(category.category);
                setProducts(category);
              }}
            >
              <p>{category.category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
