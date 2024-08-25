import "./ProductList.css";
import { useEffect } from "react";
import { useProductsContext } from "../../context/ProductContext";
import ProductCard from "../ProducCard/ProductCard";

function ProductList() {
  const { products, getProducts } = useProductsContext();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div id="id">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductList;
