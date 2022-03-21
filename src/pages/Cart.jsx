import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "../stores/products/cart/atom";

import {
  cartStatus,
  removeItemSelector,
} from "../stores/products/cart/selectors";

function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems, totalPrice } = useRecoilValue(cartStatus);
  const removeItem = useSetRecoilState(removeItemSelector);

  return (
    <div className="cart-container">
      <h2>Your cart</h2>
      {cart.map((product, index) => (
        <div className="cart-item" key={product.index}>
          <img className="cart-img" src={product.image} alt={product.title} />
          <p className="info">{product.title} </p>
          <span>$ {product.price} </span>

          <button className="remove-button" onClick={() => removeItem(index)}>
            Remove
          </button>
        </div>
      ))}
      <div className="total-container">
        <h3>
          Items: {totalItems} | Total: ${totalPrice}
        </h3>
        <button className="button" disabled>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
