import React from "react";
import { NavLink } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Logged in as Admin
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
                  href="/admin"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/admininventory">
                  Inventory
                </NavLink>
              </li>
            </ul>
            <span className="navbar-text">
              <NavLink to="/Login">
                <button className="btn btn-outline-dark ms-2">
                  <i className="fa fa-sign-in me-1"></i>Log out
                </button>
              </NavLink>
              {/* <NavLink to="/Login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i> Logout
              </NavLink> */}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
