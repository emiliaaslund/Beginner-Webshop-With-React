import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function FetchAdminProducts() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
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
            <th>Id</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        {product.map((product) => (
          <tbody key={product.id}>
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default FetchAdminProducts;
