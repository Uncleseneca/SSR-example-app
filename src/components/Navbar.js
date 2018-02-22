import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="container navbar">
    <Link to="/">Home</Link>
    <div className="nav-links">
      <Link to="/players">Players</Link>
      <Link to="/teams">Teams</Link>
    </div>
  </header>
);

export default Navbar;
