import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import FetchUsers from "../components/FetchUsers";

function AdminUsers() {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <h3>List of Users</h3>
        <div>
          <FetchUsers />
        </div>
      </div>
    </div>
  );
}
export default AdminUsers;
