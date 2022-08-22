import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authState, userState } from "../stores/products/auth/atom";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "city",
      street: "street",
      number: 1,
      zipcode: "12926-3874",
    },
    phone: "",
  });
  console.log(user);

  const handleRegister = (e) => {
    axios.post("https://fakestoreapi.com/users", user).then((res) => {
      axios
        .post("https://fakestoreapi.com/auth/login", {
          username: res.data.username,
          password: res.data.password,
        })
        .then((res) => {
          axios
            .get(`https://fakestoreapi.com/users/${res.data.userId}`)
            .then((userData) => {
              setAuth({
                user: userData.data,
                token: res.data.token,
              });
              navigate("/profile");
            });
        });
    });
    // console.log(user);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 center">
        <h1 className="fs-3 text-dark mb-5 mt-3">Register</h1>
        <form
          className="row g-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="col-md-6">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
              value={user.username}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              value={user.password}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Firstname:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setUser({
                  ...user,
                  name: {
                    ...user.name,
                    firstname: e.target.value,
                  },
                })
              }
              required
              value={user.name.firstname}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Lastname:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setUser({
                  ...user,
                  name: {
                    ...user.name,
                    lastname: e.target.value,
                  },
                })
              }
              required
              value={user.name.lastname}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              value={user.email}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              required
              value={user.phone}
            />
          </div>

          <div className="col-12 mt-4">
            <button
              type="button"
              className="btn btn-outline-dark px-3 py-2"
              onClick={() => [handleRegister()]}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
