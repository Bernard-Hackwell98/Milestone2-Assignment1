import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Counter</Link></li>
        <li><Link to="/digital-clock">Digital Clock</Link></li>
        <li><Link to="/stopwatch">Stopwatch</Link></li>
        <li><Link to="/todo-list">To-Do List</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
