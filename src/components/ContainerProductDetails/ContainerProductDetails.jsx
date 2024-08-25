import { useEffect, useState } from "react";
import "./ContainerProductDetails.css";

import ProductDetails from "../ProductDetails/ProductDetails";
import { useLocation } from "react-router-dom";
import { useProductsContext } from "../../context/ProductContext";

function ContainerProductDetails() {
  const { getProductByNombre } = useProductsContext();
  const [product, setProducts] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nombre = queryParams.get("nombre");

  const setProductById = async () => {
    console.log("Nombre buscado:", nombre);
    try {
      const ProductId = await getProductByNombre(nombre);
      setProducts(ProductId);
      console.log("producto obtenido", ProductId);
    } catch (error) {
      console.log("no carga", error);
    }
  };
  useEffect(() => {
    setProductById();
  }, []);
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
