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
        `https://fakestoreapi.com/products${productId}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div>
      {!product.lenght == 0 ? (
        <h1>cargando.....</h1>
      ) : (
        product.map((product, id) => {
          <ProductDetails key={id} product={product} />;
        })
      )}
    </div>
  );
}
export default ContainerProductDetails;
