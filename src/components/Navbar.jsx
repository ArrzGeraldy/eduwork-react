import React from "react";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div className="nav-item">
        <h1>{props.title}</h1>
        <p>Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
