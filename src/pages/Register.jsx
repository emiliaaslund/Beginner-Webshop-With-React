import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authState } from "../stores/products/auth/atom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [auth, setAuth] = useRecoilState(authState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState();
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  function handleRegister() {
    axios
      .post("https://k4backend.osuka.dev/users", {
        username: username,
        password: password,
        email: email,
        role: "user",
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
        },
        phone: phone,
      })
      // .then((res) => {
      //   axios
      //     .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
      //     .then((userData) => {
      //       setAuth({
      //         user: userData.data,
      //         token: res.data.token,
      //       });
      //     })
      .catch((err) => {
        console.log(err);
      });

    navigate("/login");
    console.log(
      username,
      password,
      email,
      firstname,
      lastname,
      "hej vi syns i consolen"
    );
  }
  // FÅR ERROR: Request failed with status code 401

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
              onChange={(e) => setUsername(e.target.value)}
              required
              value={username}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstname(e.target.value)}
              required
              value={firstname}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Lastname:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLastname(e.target.value)}
              required
              value={lastname}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              required
              value={phone}
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
