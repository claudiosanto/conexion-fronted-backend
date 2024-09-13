import { useEffect, useState } from "react";
import "./ContainerProductDetails.css";

import ProductDetails from "../ProductDetails/ProductDetails";

import { useProductsContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

function ContainerProductDetails() {
  const { getProductByNombre } = useProductsContext();
  const [product, setProducts] = useState(null);
  const { id } = useParams();

  const setProductById = async () => {
    try {
      const product = await getProductByNombre(id);
      console.log(product);
      setProducts(product);
    } catch (error) {
      console.log("no carga", error);
    }
  };
  useEffect(() => {
    setProductById();
  }, [id]);
  return (
    <div>
      {!product ? (
        <div>cargando...</div>
      ) : (
        <ProductDetails key={product.nombre} product={product} />
      )}
    </div>
  );
}
export default ContainerProductDetails;
