import { useState } from "react";
import "./ProductList.css";
import ProductCard from "../ProducCard/ProductCard";

function ProductList({ products }) {
  return (
    <div>
      {products.length == 0 ? (
        <div>loader....</div>
      ) : (
        products.map((product) => {
          <ProductCard product={product} />;
        })
      )}
    </div>
  );
}
export default ProductList;
