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
      setProducts(data.payload);
      console.log(data.payload);
    } catch (error) {
      console.error(error);
    }
  };

  const getProductByNombre = async (nombre) => {
    if (!nombre) {
      console.error("El nombre del producto no está definido o es vacío");
      return null;
    }
    try {
      const URL = `http://localhost:4030/api/products/nombre/?nombre=${nombre}`;
      console.log(
        `http://localhost:4030/api/products/nombre/?nombre=${nombre}`,
        URL
      );
      const response = await fetch(URL);

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, getProductByNombre, getProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
