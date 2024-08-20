import "./ProductList.css";
import ProductCard from "../ProducCard/ProductCard";

function ProductList({ products }) {
  return (
    <div id="list">
      {!products || products.length === 0 ? (
        <div>loader....</div>
      ) : (
        products.map((product) => {
          <ProductCard key={product.id} product={products} />;
        })
      )}
    </div>
  );
}
export default ProductList;
