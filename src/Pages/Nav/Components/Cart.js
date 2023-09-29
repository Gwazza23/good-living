import "./Cart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'
import { useSelector } from "react-redux";
import { selectCart } from "../../../Slices/CartSlice";

function Cart({ open, closeCart }) {
  const cart = useSelector(selectCart);
  console.log(cart);

  return (
    <div className={`cart-container ${open ? "" : "closed"}`}>
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button onClick={closeCart}>
          <AiFillCloseCircle />
        </button>
      </div>
      {cart.length === 0 ? (
        <div className="no-items">
          <p>Your shopping cart is empty</p>
        </div>
      ) : (
        <div className="cart-items-list">
          {cart.map((item) => {
            return (
              <div className="cart-item">
                <img src={item.src} alt={item.name} />
                <h5 id="cart-item-name" >{item.name}</h5>
                <div className="cart-quantity" >
                  <button><BiSolidUpArrow/></button>
                  <h5>{item.quantity}</h5>
                  <button><BiSolidDownArrow/></button>
                </div>
                <h5 id="cart-item-price" >£{item.price * item.quantity}</h5>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
