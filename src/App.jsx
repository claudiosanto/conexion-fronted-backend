import "./App.css";
import ContainerProducts from "./components/containerProducts/ContainerProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Header";
import Users from "./components/containerUsers/Users";
import ContainerProductDetails from "./components/ContainerProductDetails/ContainerProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/products/:nombre" element={<ContainerProductDetails />} />
        <Route path="/products" element={<ContainerProducts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
