import "./App.css";
import ContainerProducts from "./components/containerProducts/ContainerProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerProductDetails from "./components/ContainerProductDetails/ContainerProductDetails";
import UsersContainer from "./components/containerUsers/UsersContainer";
import Header from "../src/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/products" element={<ContainerProducts />} />
        <Route
          path="/products/:productId"
          element={<ContainerProductDetails />}
        />
        <Route path="/users" element={<UsersContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
