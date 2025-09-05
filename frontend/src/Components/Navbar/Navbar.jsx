import React, { useContext } from "react";
import { AuthContext } from '../../context/AuthContext'
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ background: "#000", padding: "10px" }}>
      <ul style={{ display: "flex", justifyContent: "center", listStyle: "none" }}>
        <li style={{ margin: "0 15px" }}><Link to="/">Home</Link></li>
        <li style={{ margin: "0 15px" }}><Link to="/about">About</Link></li>
        <li style={{ margin: "0 15px" }}><Link to="/programs">Programs</Link></li>
        <li style={{ margin: "0 15px" }}><Link to="/contact">Contact</Link></li>

        {user ? (
          <li style={{ margin: "0 15px" }}>
            <button
              onClick={logout}
              style={{ background: "red", color: "white" }}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li style={{ margin: "0 15px" }}><Link to="/login">Login</Link></li>
            <li style={{ margin: "0 15px" }}><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
