import { useState } from "react";
import "./Header.css";
import { Link, Outlet, useParams } from "react-router-dom";
import { items } from "../../../Util/Items";

function Header() {
  const { category } = useParams();
  const categoryName = items.find((item) => item.link === category)
  const [name, setName] = useState(categoryName.name);
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
                key={category.id}
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
