import React from "react";
import { NavLink } from "react-router-dom";

function ProfileNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            My Profile
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/profile"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  My Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  My Returns
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  My Favorites
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <NavLink to="/Login">
                <button className="btn btn-outline-dark ms-2">
                  <i className="fa fa-sign-in me-1"></i>Log out
                </button>
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ProfileNavbar;
