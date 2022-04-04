import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import FetchAdminProducts from "../components/FetchAdminProducts";

function AdminInventory() {
  return (
    <div>
      <AdminNavbar />
      <h1 className="fs-2 text-dark mt-5">Inventory</h1>
      <FetchAdminProducts />
    </div>
  );
}

export default AdminInventory;
