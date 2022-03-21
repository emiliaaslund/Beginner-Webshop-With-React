import React from "react";
import { Link } from "react-router-dom";
import { cartState } from "../stores/products/cart/atom";
import { useRecoilState } from "recoil";

function Navbar() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <div className="navbar">
      <div>
        <img className="logo" src="https://via.placeholder.com/150x50" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </div>
  );
}

export default Navbar;
