import React from "react";
import { useRecoilValue } from "recoil";
import ProductList from "../components//ProductList";
import { productsState } from "../stores/products/products/atom";

function Products() {
  const products = useRecoilValue(productsState);

  return (
    <div className="product-list">
      <h2>Trending Products</h2>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default Products;
