import { useEffect, useState } from "react";
import "./ContainerProducts.css";
import ProductList from "../ProductList/ProductList";
function ContainerProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <ProductList products={products} />;
}
export default ContainerProducts;
