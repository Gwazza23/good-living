import "./Cart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { IoBagCheck } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateItemInCart,
  removeItemFromCart,
  selectCart,
} from "../../../Slices/CartSlice";
import { useEffect } from "react";

function Cart({ open, closeCart }) {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  function totalCart() {
    let total = 0;
    for (const item of cart) {
      total += item.quantity * item.price;
    }
    return total;
  }

  const total = totalCart();

  function handleSubmit() {
    if (cart.length === 0) {
      return
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        console.log(url);
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  }

  function handleIncrease(id, quantity) {
    let newQauntity = quantity + 1;
    dispatch(UpdateItemInCart([id, newQauntity]));
  }
  function handleDecrease(id, quantity) {
    if (quantity === 1) {
      dispatch(removeItemFromCart(id));
    }
    let newQuantity = quantity - 1;
    dispatch(UpdateItemInCart([id, newQuantity]));
  }

  useEffect(() => {}, []);

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
              <div key={item.id} className="cart-item">
                <img src={item.src} alt={item.name} />
                <h5 id="cart-item-name">{item.name}</h5>
                <div className="cart-quantity">
                  <button
                    onClick={() => {
                      handleIncrease(item.id, item.quantity);
                    }}
                  >
                    <BiSolidUpArrow />
                  </button>
                  <h5>{item.quantity}</h5>
                  <button
                    onClick={() => {
                      handleDecrease(item.id, item.quantity);
                    }}
                  >
                    <BiSolidDownArrow />
                  </button>
                </div>
                <h5 id="cart-item-price">
                  £{(item.price * item.quantity).toFixed(2)}
                </h5>
              </div>
            );
          })}
        </div>
      )}
      <div className="cart-total">
        <div className="cart-total-section1">
          <h2>Cart Total:</h2>
          <h2>£{total.toFixed(2)}</h2>
        </div>
        <button onClick={handleSubmit}>
          Checkout
          <IoBagCheck id="checkout-bag" />
        </button>
      </div>
    </div>
  );
}

export default Cart;
