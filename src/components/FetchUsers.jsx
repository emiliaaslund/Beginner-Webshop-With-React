import React, { useEffect, useState } from "react";
import axios from "axios";
import { productsState } from "../stores/products/products/atom";
import { useRecoilState } from "recoil";
import { Table } from "react-bootstrap";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://k4backend.osuka.dev/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default FetchUsers;
