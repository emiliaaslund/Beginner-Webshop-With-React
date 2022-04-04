import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../assets/Hero.png";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={hero} className="card-img" alt="" height="800px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-dark">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 text-dark">
              CHECK OUT ALL THE TRENDS
            </p>
            <div className="buttons">
              <NavLink to="/products" className="btn btn-dark ms-2 px-3 py-2">
                SHOP NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
