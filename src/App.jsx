import { useState } from "react";

import "./App.css";
import ContainerProducts from "./components/containerProducts/ContainerProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerProductDetails from "./components/ContainerProductDetails/ContainerProductDetails";

function App() {
  const [count, setCount] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/" element={<ContainerProducts />} />
        <Route
          path="/products/:productId"
          element={<ContainerProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
