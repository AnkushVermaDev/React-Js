import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <nav>
        <Link to="/" style={{ color: '#fff', marginRight: '20px' }}>Home</Link>
        <Link to="/cart" style={{ color: '#fff' }}>Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
