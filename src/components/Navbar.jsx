import React from "react";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div className="nav-item">
        <h1>{props.title}</h1>
        <div className="link">
          <a href="/about">About</a>
          <a href="/category">Category</a>
          <a href="/contact">Contact</a>
        </div>
        <p>Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
