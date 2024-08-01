import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div>
      <img src={product.Image} alt="imagen del producto" />
      <h1>nombre{product.nombre}</h1>
      <p>color{product.precio}</p>

      <p>{product.stock}</p>
      <p>{product.caducidad}</p>
      <p>{product.lote}</p>
      <p>{product.descripcion}</p>
      <Link to={`/products/nombre${product.nombre}`}>ver detalle</Link>
    </div>
  );
}
export default ProductCard;
