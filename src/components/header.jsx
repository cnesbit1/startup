// Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header({ title, username }) {
  const location = useLocation();
  
  // Check if the current page is the login page
  const isLoginPage = location.pathname === '/';

  return (
    <header className="bg-dark text-white py-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Left Logo */}
        <img src="/public/voting-icon.webp" alt="Left Logo" className="header-logo left-logo" />
        
        {/* Centered Title and Conditional Navigation */}
        <div className="d-flex flex-column align-items-center text-center">
          <h1 className="mb-1">{title}</h1>
          
          {/* Render navigation links only if not on the login page */}
          {!isLoginPage && (
            <nav className="navbar navbar-expand navbar-dark justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/roster" className="nav-link">Roster</Link>
                </li>
                <li className="nav-item">
                  <Link to="/user" className="nav-link">User Profile</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>

        {/* Username Display - Only visible if not on the login page */}
        {!isLoginPage && (
        <div id="username-display" className="info-display text-center my-3">
            <p><strong>Logged in as:</strong> {username}</p>
        </div>
        )}

        {/* Right Logo */}
        <img src="/public/voting-icon.webp" alt="Right Logo" className="header-logo right-logo" />
      </div>
    </header>
  );
}
