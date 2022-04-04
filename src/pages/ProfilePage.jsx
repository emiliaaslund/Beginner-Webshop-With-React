import React from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../stores/products/auth/atom";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  //   const { user } = useRecoilValue(authState);
  //   console.log(user);

  //   const navigate = useNavigate();

  //   function handleLogout() {
  //     navigate("/login");
  //   }

  return (
    <div>
      <div className="container mt-5">
        <h1 className="fs-3 text-dark mb-5 mt-3">My Profile</h1>
        <h4 className="fs-4 text-dark mb-5 mt-3">Welcome to the user page</h4>
        <div className="col-md-6 center">
          <p>Email: </p>
          <p>Username: </p>
          <p>City: </p>
          <p>Street: </p>
          <p>Number: </p>
          <p>Zip-code: </p>
          <p>Username: </p>
          <p>Phone: </p>
          <p>Password:</p>
          <button
            type="button"
            className="btn btn-outline ms-2 px-3 py-2"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
