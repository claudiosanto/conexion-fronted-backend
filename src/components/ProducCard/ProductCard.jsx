import { Link } from "react-router-dom";
import "./ProductCard.css";
function ProductCard(product) {
  return (
    <div>
      <img src={Image} alt="imagen del producto" />
      <h1>{product.name}</h1>
      <p>{product.color}</p>
      <p>{product.origin}</p>
      <p>key={id}</p>
      <Link to={`/product/${product.id}`}>ver detalle del producto</Link>
    </div>
  );
}
export default ProductCard;
