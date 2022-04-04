import axios from "axios";
import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState, userState } from "../stores/products/auth/atom";

function Login() {
  const [auth, setAuth] = useRecoilState(authState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit() {
    axios
      .post("https://k4backend.osuka.dev/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        axios
          .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
          .then((userData) => {
            setAuth({
              user: userData.data,
              token: res.data.token,
            });
            navigate(userData.data.role === "user" ? "/profile" : "/admin");
          });
      });
  }

  return (
    <div className="container mt-5">
      <div className="col-md-6 center">
        <h1 className="fs-3 text-dark mb-5 mt-3">Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type=""
              className="form-control"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            onClick={() => [handleSubmit()]}
            className="btn btn-dark px-3 py-2"
          >
            <i className="fa fa-sign-in me-1"></i> Login
          </button>
        </form>
        <div className="text-align-center mt-5">
          Need an Account?
          <br />
          <div className="line mt-2">
            <NavLink to="/register" className="btn btn-outline-dark py-2">
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
