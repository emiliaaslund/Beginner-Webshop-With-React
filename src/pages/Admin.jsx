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
      <h1 className="fs-2 text-dark mt-5">Welcome to the admin page</h1>
      <div className="d-flex justify-content-center">
        <img src={admin} alt="" height="600px" width="1200px" />
      </div>
    </div>
  );
}

export default Admin;
