import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="caracteristicas">
      <img src={product.image} alt={product.nombre} />
      <h1>{product.nombre}</h1>
      <p>{product.precio}</p>
      <p>{product.stock}</p>
      <p>{product.caducidad}</p>
      <p>{product.lote}</p>
      <p>{product.descripcion}</p>
      <Link to={`/products/nombre/?nombre=${product.nombre}`}>ver detalle</Link>
    </div>
  );
}
export default ProductCard;
