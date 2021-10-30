import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './navbar.module.css';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt='Logo' />
      <ul>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/order-review'>Order Review</NavLink>
        </li>
        <li>
          <NavLink to='/inventory'>Manage Inventory</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
