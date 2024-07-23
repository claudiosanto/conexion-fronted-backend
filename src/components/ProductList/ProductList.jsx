import "./ProductList.css";
import ProductCard from "../ProducCard/ProductCard";

function ProductList({ products }) {
  console.log(products);
  return (
    <>
      <div>
        {!products & (products.length === 0) ? (
          <div>loader....</div>
        ) : (
          products.map((product) => {
            <ProductCard key={product.id} product={product} />;
          })
        )}
      </div>
    </>
  );
}
export default ProductList;
