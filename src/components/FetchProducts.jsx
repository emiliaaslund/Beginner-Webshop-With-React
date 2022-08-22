import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { productsState } from "../stores/products/products/atom";
import { useRecoilState } from "recoil";

function FetchProducts() {
  const [product, setProduct] = useRecoilState(productsState);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-100 mt-5">
      <div className="row d-flex p-3 justify-content-center">
        {product.map((product) => (
          <div
            className="card h-100 p-3 col-md-3 text-center m-2"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
              className="img-top m-5 p-2"
              height="400px"
            />
            <div className="card-body">
              <h6 className="card-title mb-3 fs-6">{product.title}</h6>
              <h4 className="card-text lead fw-bold mb-4">$ {product.price}</h4>
              <NavLink
                to={`/products/${product.id}`}
                className="btn btn-dark ms-2 px-3 py-2"
              >
                Buy Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchProducts;
