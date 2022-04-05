import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import admin from "../assets/admin.avif";

function Admin() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div>
      <AdminNavbar />
      <h1 className="fs-2 text-dark mt-5 mb-4 ">Welcome to the Admin page! </h1>
      <div className="d-flex justify-content-center">
        <img src={admin} alt="" height="700px" width="1300px" />
      </div>
    </div>
  );
}

export default Admin;
