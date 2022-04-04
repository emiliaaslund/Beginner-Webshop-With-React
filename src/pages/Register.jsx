import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authState, userState } from "../stores/products/auth/atom";

function Register() {
  const [auth, setAuth] = useRecoilState(authState);
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    role: "user",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://k4backend.osuka.dev/users", {
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstname: user.firstname,
          lastname: user.lastname,
        },
        address: {
          city: user.city,
          street: user.street,
          number: user.number,
          zipcode: user.zipcode,
        },
        phone: user.phone,
      })
      .then((res) => {
        axios
          .post("https://k4backend.osuka.dev/auth/login", {
            username: res.data.username,
            password: res.data.password,
          })
          .then((res) => {
            axios
              .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
              .then((userData) => {
                setAuth({
                  user: userData.data,
                  token: res.data.token,
                });
              })
              .catch((err) => console.log(err));
          });

        navigate("/login");
      });
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 center">
        <h1 className="fs-3 text-dark mb-5 mt-3">Register</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
              value={user.username}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              value={user.password}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              required
              value={user.firstname}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Lastname</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              required
              value={user.lastname}
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              value={user.email}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Role</label>
            <select
              defaultValue=""
              className="form-select"
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              required
              value={user.role}
            >
              <option value="" disabled>
                Choose...
              </option>
              <option>User</option>
            </select>
          </div>
          <div className="col-8">
            <label className="form-label">Street</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, street: e.target.value })}
              required
              value={user.street}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, number: e.target.value })}
              required
              value={user.number}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">City</label>

            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              required
              value={user.city}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              required
              value={user.phone}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Zip</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, zipcode: e.target.value })}
              value={user.zipcode}
            />
          </div>
          <div className="col-12 mt-3">
            <button
              type="submit"
              className="btn btn-outline-dark px-3 py-2"
              onClick={() => [handleRegister(e)]}
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
