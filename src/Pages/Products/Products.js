import "./Products.css";
import { useState } from "react";
import Header from "./Components/Header";
import { items } from "../../Util/Items";

function Products() {
  const [products, setProducts] = useState();
  return (
    <div className="products-container">
      <Header items={items} setProducts={setProducts} />
    </div>
  );
}

export default Products;
