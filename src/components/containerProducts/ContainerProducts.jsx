import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import "./ContainerProducts.css";
import { useProductsContext } from "../../context/ProductContext";

function ContainerProducts() {
  const { products, getProducts } = useProductsContext;

  useEffect(() => {
    getProducts();
  }, []);

  return <ProductList products={products} />;
}
export default ContainerProducts;
