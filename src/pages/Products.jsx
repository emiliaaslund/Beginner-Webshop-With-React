import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import FetchProducts from "../components/FetchProducts";
import { productsState } from "../stores/products/products/atom";

function Products() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <h1 className="fs-2 text-dark mt-5">Latest Products</h1>
      <FetchProducts />
    </div>
  );
}

export default Products;
