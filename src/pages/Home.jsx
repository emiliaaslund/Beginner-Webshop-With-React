import React from "react";
import hero from "../img/hero2.avif";
import { Link } from "react-router-dom";

const style = {
  width: "85%",
  height: "120vh",
  backgroundImage: `url(${hero})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function Home() {
  return (
    <div>
      <h2 className="sale">SALE UP TO 50% | get it before it's gone</h2>
      <div className="herocontainer" style={style}>
        <h1 className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit!
        </h1>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, neque
          qui.
        </h2>
        <Link as={Link} to={`/products`}>
          <button className="button">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
