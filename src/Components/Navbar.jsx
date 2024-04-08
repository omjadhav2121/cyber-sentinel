import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/scan-details">Scan Details</Link>
        </li>
        <li>
          <Link to="/scans">Scans</Link>
        </li>
        <li>
          <Link to="/user-control">User Control</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
