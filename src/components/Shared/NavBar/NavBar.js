import React from "react";
import logo from "../../../images/logo.png";
import "./navbar.module.css";

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/orders">Order Review</a>
        </li>
        <li>
          <a href="/inventory">Manage Inventory</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
