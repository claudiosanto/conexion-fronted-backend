import "./ProductDetails.css";

function ProductDetails(product) {
  return (
    <div>
      <img src="imag" />
      <p>{product.name}</p>
      <p>{product.origin}</p>
      <p>{product.color}</p>
      <p>{product.id}</p>
    </div>
  );
}
export default ProductDetails;
