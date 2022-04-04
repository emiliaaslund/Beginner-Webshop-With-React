import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "../stores/products/cart/atom";
import { productsState } from "../stores/products/products/atom";
import { useParams } from "react-router-dom";
import {
  cartStatus,
  removeItemSelector,
} from "../stores/products/cart/selectors";

function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems, totalPrice } = useRecoilValue(cartStatus);
  const removeItem = useSetRecoilState(removeItemSelector);
  const products = useRecoilValue(productsState);
  const params = useParams();
  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  return (
    <div>
      <h1 className="fs-3 text-dark mt-5 center">Your Cart</h1>
      <div className="d-flex justify-content-center mt-4">
        <div className="card p-3 col-md-4 text-center m-2">
          {cart.map((product, index) => (
            <div className="cart-item" key={product.id}>
              <img
                className="cart-img"
                src={product.image}
                alt={product.title}
              />
              <p className="info">{product.title} </p>
              <span className="fw-bold">$ {product.price} </span>

              <button
                className="btn btn-outline-dark ms-2 px-3 py-2"
                key={product.id}
                onClick={() => removeItem(index)}
              >
                x
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-evenly">
            <h4 className="card-text align-center lead fw-bold mb-4">
              Items: {totalItems} | Total: ${totalPrice}
            </h4>
          </div>
          <button className="btn btn-outline-dark ms-2 px-2 py-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
