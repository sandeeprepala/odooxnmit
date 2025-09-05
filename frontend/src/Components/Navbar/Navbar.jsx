import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login" className="nav-login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
