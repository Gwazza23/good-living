import { useParams } from "react-router-dom";
import "./Products.css";
import { items } from "../../Util/Items";

function Products() {
  const { category } = useParams();
  const products = items.find((item) => item.link === category);
  
  return <div className="products-container">
    {products.items.map((item) => {
      return <div>{item.name}</div>
    })}
  </div>;
}

export default Products;
