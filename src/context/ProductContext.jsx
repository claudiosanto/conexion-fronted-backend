import { createContext, useContext, useState } from "react";
//creacion del contexto
export const ProductsContext = createContext();
//provider=provee al resto de la aplicacion

//hook personalizado
export const useProductsContext = () => useContext(ProductsContext);
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]); //Estado global
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:4030/api/products/");
      const data = await response.json();
      console.log(data.payload);
      setProducts(data.payload);
    } catch (error) {
      console.error(error);
    }
  };

  const getProductById = async (nombre) => {
    try {
      const response = await fetch(
        `http://localhost:4030/api/products/nombre/?nombre=${nombre}`
      );
      const data = await response.json();
      console.log(data.payload);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, getProductById, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
