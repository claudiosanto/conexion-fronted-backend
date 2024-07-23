import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import "./ContainerProducts.css";

function ContainerProducts() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:4030/api/products/");
      console.log(products);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return <ProductList products={products} />;
}
export default ContainerProducts;
