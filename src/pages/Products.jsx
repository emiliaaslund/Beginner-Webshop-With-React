import React, { useState } from "react";
import FetchProducts from "../components/FetchProducts";

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
