import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Navigation Portal</h2>
      <div className="nav-links">
        <Link to="/devices">Devices</Link>
        <Link to="/network">Network</Link>
        <Link to="/version">Version</Link>
        <Link to="/activity">Activity</Link>
      </div>
    </div>
  );
};

export default Navbar;
