import { useEffect, useState } from "react";
import "./ContainerProductDetails.css";

import ProductDetails from "../ProductDetails/ProductDetails";
import { useLocation, useParams } from "react-router-dom";
import { useProductsContext } from "../../context/ProductContext";

function ContainerProductDetails() {
  const { getProductByNombre } = useProductsContext();
  const [product, setProducts] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nombre = queryParams.get("nombre");
  const setProductById = async () => {
    try {
      const Product = await getProductByNombre(nombre);
      setProducts(Product);
      console.log("producto obtenido");
    } catch (error) {
      console.log("no carga", error);
    }
  };
  useEffect(() => {
    setProductById();
  }, []);
  return (
    <div>
      {!product ? (
        <div>loader...</div>
      ) : (
        <ProductDetails key={product.nombre} product={product} />
      )}
    </div>
  );
}
export default ContainerProductDetails;
