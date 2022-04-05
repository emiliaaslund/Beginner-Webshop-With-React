import React from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../stores/products/auth/atom";
import { useNavigate } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";

function ProfilePage() {
  const { user } = useRecoilValue(authState);
  console.log(user);

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login");
  }

  return (
    <div>
      <ProfileNavbar />
      <div className="container mt-4">
        <h3 className="fs-2 text-dark mb-5 mt-3">
          Welcome to my page:
          <span className="fw-bold"> {user.name.firstname}!</span>
        </h3>
        <div className="card col-md-6 center p-4">
          <h4 className="fs-4 fw-bold mb-4 mt-2">MY DETAILS</h4>
          <p className="fs-5">
            <span className="fw-bold">Firstname: </span> {user.name.firstname}
          </p>
          <p className="fs-5">
            <span className="fw-bold">Lastname: </span>
            {user.name.lastname}
          </p>
          <p className="fs-5">
            <span className="fw-bold">Username:</span> {user.name.firstname}
          </p>

          <p className="fs-5">
            <span className="fw-bold">Email: </span>
            {user.email}
          </p>

          <p className="fs-5">
            <span className="fw-bold">Phone:</span> {user.phone}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
