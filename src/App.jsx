import "./App.css";
import ContainerProducts from "./components/containerProducts/ContainerProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Header";
import Users from "./components/containerUsers/Users";
import ContainerProductDetails from "./components/ContainerProductDetails/ContainerProductDetails";
import ProductsProvider from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route
            path="/products/nombre"
            element={<ContainerProductDetails />}
          />
          <Route path="/products" element={<ContainerProducts />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}
export default App;
