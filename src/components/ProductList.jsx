import React from "react";
import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/products/atom";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

function ProductList({}) {
  const params = useParams();
  const products = useRecoilValue(productsState);
  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <img className="item-img" src={product.image} />
          <h4>{product.title}</h4>
          <h4>${product.price}</h4>
          {/* <p>{product.description}</p> */}
          <div className="btn-container">
            <Link as={Link} to={`/products/${product.id}`}>
              <button className="button">Read more</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
