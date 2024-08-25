import ProductCard from "../ProducCard/ProductCard";
import "./ProductDetails.css";

function ProductDetails({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.nombre} />
      <p>{product.nombre}</p>
      <p>{product.stock}</p>
      <p>{product.lote}</p>
      <p>{product.id}</p>
      <p>{product.caducidad}</p>
      <p>{product.descripcion}</p>
      <p>{product.categoria}</p>
      <p>{product.precio}</p>
      <ProductCard product={product} />
    </div>
  );
}
export default ProductDetails;
