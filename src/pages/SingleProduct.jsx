import React from "react";
import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/products/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState } from "../stores/products/cart/atom";
import { Link } from "react-router-dom";

function SingleProducts() {
  const params = useParams();
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);

  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  function addToCart() {
    // console.log("Jag är i addCart");
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div>
      <div className="product-box">
        <div>
          <Link as={Link} to={`/products/`}>
            <button className="back-button">⇦ Back</button>
          </Link>
        </div>
        <div className="box">
          <img className="product-detail-img" src={product.image} />
          <div className="product-details">
            <h2>{product.title}</h2>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
            <div>
              <button
                className="button"
                key={product.id}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link as={Link} to={`/cart/`}>
                <button className="button">Go to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProducts;
