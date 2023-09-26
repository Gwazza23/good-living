import { useState } from "react";
import "./Header.css";
import { Link, Outlet, useParams } from "react-router-dom";
import { items } from "../../../Util/Items";

function Header() {
  const { category } = useParams();
  let urlCategory = category || "";
  const productCategory = items.find((item) => item.link === urlCategory);
  const [name, setName] = useState(productCategory.name);

  return (
    <>
      <div className="header-container">
        <h2>{name}</h2>
        <ul>
          {items.map((category) => {
            return (
              <Link
                onClick={() => setName(category.name)}
                to={`/categories/${category.link}`}
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
