import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="container">
      <div className="container-header">
        <h2>ReactMeals</h2>
        <div className="cart">
          <FaShoppingCart />
          <span>Your Cart</span>
          <span className="cart-count">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
