// src/components/Homepage/Home.js
import './Home.css';
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Delivery Services</h1>
      <p>Select your store and place an order!</p>
      <div className="home-buttons">
        <Link to="/store-selection">
          <button>Browse Stores</button>
        </Link>
        <Link to="/orders">
          <button>Your Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;