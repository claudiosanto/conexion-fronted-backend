import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div>
      <img src={product.Image} alt="imagen del producto" />
      <h1>nombre{product.title}</h1>
      <p>color{product.price}</p>
      <p> key={product.id}</p>
      <Link to={`/products/${product.id}`}>ver detalle</Link>
    </div>
  );
}
export default ProductCard;
