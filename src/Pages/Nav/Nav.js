import "./Nav.css";
import { NavLink, Outlet } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <NavLink to={"/"}>
            <h1>
              Good<span>Living</span>
            </h1>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to={"/products/all"}>Products</NavLink>
          <button>
            <BsCart3 />
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
