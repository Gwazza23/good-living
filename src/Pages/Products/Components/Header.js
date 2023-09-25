import { useState } from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import { items } from "../../../Util/Items";

function Header() {
  const [name, setName] = useState("All");
  return (
    <>
      <div className="header-container">
        <h2>{name}</h2>
        <ul>
          {items.map((category) => {
            return (
              <Link
                onClick={() => setName(category.name)}
                to={`/products/${category.link}`}
              >
                <li>{category.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
