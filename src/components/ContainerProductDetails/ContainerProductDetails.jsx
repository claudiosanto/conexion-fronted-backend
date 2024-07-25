import { useEffect, useState } from "react";
import "./ContainerProductDetails.css";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

function ContainerProductDetails() {
  const [product, setProducts] = useState(null);

  const { productId } = useParams();

  const getProductById = async () => {
    try {
      const response = await fetch(
        `http://localhost:4030/api/products/${productId}`
      );
      const data = await response.json();
      console.log(data.payload);
      setProducts(data.payload);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [productId]);
  return (
    <div>
      {product == null ? (
        <div>loader...</div>
      ) : (
        product.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
export default ContainerProductDetails;
