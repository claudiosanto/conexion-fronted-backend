import { useEffect, useState } from "react";
import "./ContainerProductDetails.css";

import ProductDetails from "../ProductDetails/ProductDetails";
import { useLocation } from "react-router-dom";
import { useProductsContext } from "../../context/ProductContext";

function ContainerProductDetails() {
  const { getProductById } = useProductsContext;
  const [product, setProducts] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nombre = queryParams.get("nombre");

  //creamos una funcion porque getProductById es async y para ejecutarlo en el useEffect es de otra forma
  const getById = async () => {
    setProducts(await getProductById(nombre));
  };
  useEffect(() => {}, []);
  return (
    <div>
      {product == null ? (
        <div>loader...</div>
      ) : (
        <ProductDetails key={product.id} product={product} />
      )}
    </div>
  );
}
export default ContainerProductDetails;
