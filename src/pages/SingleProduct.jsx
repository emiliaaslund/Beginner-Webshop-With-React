import React from "react";
import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/products/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState } from "../stores/products/cart/atom";
import { NavLink } from "react-router-dom";

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
      <div className="cart-container-lg">
        <div>
          <NavLink to={`/products/`}>
            <button className="btn btn-outline-dark mt-3 ms-2 px-3 py-2">
              ⇦ Back
            </button>
          </NavLink>
        </div>
        <div className="row d-flex p-3 justify-content-center">
          <h4 className="text-uppercase text-black-50 mb-5">
            {product.category}
          </h4>
          <img
            className="h-100 p-3 col-md-3 text-center m-2"
            src={product.image}
            alt={product.title}
          />
          <div className="col-md-3 text-center m-2">
            <h2 className="fs-2 text-dark">{product.title}</h2>
            <p className="lead fs-5 fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-7 fw-bold my-4 mb-4">$ {product.price}</h3>
            <p className="lead fs-6 mb-4">{product.description}</p>
            <div>
              <button
                className="btn btn-outline-dark ms-2 px-3 py-2"
                key={product.id}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <NavLink to={`/cart/`}>
                <button className="btn btn-dark ms-2 px-3 py-2">
                  Go to Cart
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProducts;
