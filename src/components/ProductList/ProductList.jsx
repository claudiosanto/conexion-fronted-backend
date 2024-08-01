import "./ProductList.css";
import ProductCard from "../ProducCard/ProductCard";

function ProductList({ products }) {
  return (
    <div>
      {!products || products.length === 0 ? (
        <div>loader....</div>
      ) : (
        products.map((products) => {
          <ProductCard key={products.id} product={products} />;
        })
      )}
    </div>
  );
}
export default ProductList;
