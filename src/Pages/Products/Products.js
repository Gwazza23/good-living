import { useParams } from "react-router-dom";
import "./Products.css";
import { items } from "../../Util/Items";
import { Link } from "react-router-dom";

function Products() {
  const { category } = useParams();
  const products = items.find((item) => item.link === category);

  return (
    <div className="products-container">
      {products.items.map((item) => {
        return (
          <Link to={`/product/${item.id}`} className="product" key={item.id}>
            <img loading="lazy" src={item.src} alt={item.name} />
            <h4>{item.name}</h4>
            <p>£{item.price}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
