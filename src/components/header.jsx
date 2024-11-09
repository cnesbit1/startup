import React from 'react';
import { Link } from 'react-router-dom';

export function Header({ title }) {
  return (
    <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <div className="navbar-brand">
          BallotBox Exchange<sup>&reg;</sup>
        </div>
        <menu className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/roster" className="nav-link">Roster</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">User Profile</Link>
          </li>
        </menu>
      </nav>
      <div className="text-center">
        <img src="images/voting-icon.webp" alt="Left Logo" className="header-logo left-logo" />
        <h1>{title}</h1>
        <img src="images/voting-icon.webp" alt="Right Logo" className="header-logo right-logo" />
      </div>
    </header>
  );
}
