import "./Item.css";
import { BiSolidLeftArrow, BiSolidCheckCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { items } from "../../Util/Items";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddItemToCart } from "../../Slices/CartSlice";
import { useDispatch } from "react-redux";

function Item() {
  let [quantity, setQuantity] = useState(1);
  let [popUpOpen, setPopUpOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const All = items.find((item) => item.name === "All");
  const allItems = items.reduce((accumulator, current) => {
    if (current !== All) {
      accumulator.push(...current.items);
    }
    return accumulator;
  }, []);
  All.items = allItems;

  const item = All.items.find((item) => item.id.toString() === id);

  function goBack() {
    navigate(-1);
  }

  function openPopUp() {
    setPopUpOpen(true);
    setTimeout(() => {
      setPopUpOpen(false);
    }, 2500);
  }

  function handleSubmit(id, price, name, src) {
    dispatch(
      AddItemToCart({
        id: id,
        quantity: quantity,
        price: price,
        name: name,
        src: src,
      })
    );
    openPopUp();
  }

  function handleDecrease() {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  }
  function handleIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  let [price, setPrice] = useState(item.price);

  useEffect(() => {
    setPrice(item.price * quantity);
  }, [item.price, quantity]);

  return (
    <>
      <div className={`pop-up ${popUpOpen ? "open" : ""}`}>
        <p>Item Added To Cart</p> <BiSolidCheckCircle id="pop-up-tick" />
      </div>
      <div className="item-page-wrapper">
        <button onClick={goBack} id="go-back-button">
          <BiSolidLeftArrow />
          Go Back
        </button>
        <div className="item-container">
          <div className="item-section">
            <div className="item-img-container">
              <img src={item.src} alt={item.name} />
            </div>
            <div className="item-info-container">
              <div className="item-info-wrapper">
                <h2>{item.name}</h2>
                <h5>{item.desc}</h5>
                <div className="quantity-section">
                  <h3>Quantity</h3>
                  <div className="quantity-buttons">
                    <button onClick={handleDecrease}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncrease}>+</button>
                  </div>
                  <h3 id="price">£{price.toFixed(2)}</h3>
                </div>
                <button
                  id="buy-button"
                  onClick={() => {
                    handleSubmit(item.id, item.price, item.name, item.src);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
