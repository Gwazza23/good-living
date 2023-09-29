import "./Nav.css";
import { NavLink, Outlet } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Cart from "./Components/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../Slices/CartSlice";

function Nav() {
  const [open, setOpen] = useState(false);

  let cart = useSelector(selectCart) || null

  function openCart() {
    setOpen(true);
  }
  function closeCart() {
    setOpen(false);
  }

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
          <NavLink to={"/categories"}>Products</NavLink>
          <button onClick={openCart}>
            <BsCart3 /><div className="cart-overlay" >{cart.length}</div>
          </button>
        </div>
      </nav>
      <div className={`overlay ${open ? "open" : ""}`}>
      </div>
      <Cart open={open} closeCart={closeCart} />
      <Outlet />
    </>
  );
}

export default Nav;
