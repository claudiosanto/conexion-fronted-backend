import { useEffect, useState } from "react";
import "./ContainerProductDetails.css";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
function ContainerProductDetails() {
  const [product, setProducts] = useState(null);

  const { productId } = useParams();

  const getProductById = () => {
    fetch(`http://localhost:4030/api/product${productId}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
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
