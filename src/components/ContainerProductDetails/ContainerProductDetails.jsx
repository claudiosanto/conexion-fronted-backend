import { useEffect, useState } from "react";
import "./ContainerProductDetails.css";

import ProductDetails from "../ProductDetails/ProductDetails";

import { useProductsContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

function ContainerProductDetails() {
  const { getProductById } = useProductsContext();
  const [product, setProducts] = useState(null);
  const { _id } = useParams();

  const setProductById = async () => {
    try {
      const response = await getProductById(_id);
      console.log(response);
      if (response && response.payload) {
        setProducts(response.payload);
      } else {
        console.log("No se encontró el producto o el payload es inválido");
      }
    } catch (error) {
      console.log("no carga", error);
    }
  };
  useEffect(() => {
    setProductById();
  }, [_id]);
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
