import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './navbar.module.css';

const NavBar = () => {
  const { loggedInUser, logOut } = useAuth();
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
        {!loggedInUser ? (
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        ) : (
          <li>
            <span>Hello : {loggedInUser.displayName}</span>
            <button onClick={logOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
