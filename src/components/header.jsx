import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header({ title, username }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === '/';
  const isUserPage = location.pathname === '/user';
  const isRosterPage = location.pathname === '/roster';

  const handleLogOut = () => {
    // Clear session data
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentEmail');

    // Redirect to the login page
    navigate('/');
  };

  return (
    <header className="header container-fluid py-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <img src="/voting-icon.webp" alt="Left Logo" className="header-logo left-logo" />

        <div className="d-flex align-items-center justify-content-center flex-grow-1">
          <h1 className="mb-0 me-4">{title}</h1>

          {!isLoginPage && (
            <nav className="navbar navbar-expand navbar-dark mb-0">
              <ul className="navbar-nav d-flex">
                <li className="nav-item">
                  {/* Attach the handleLogOut function */}
                  <button className="nav-link btn btn-link text-decoration-none" onClick={handleLogOut}>
                    Log Out
                  </button>
                </li>
                {!isRosterPage && (
                  <li className="nav-item">
                    <Link to="/roster" className="nav-link">Roster</Link>
                  </li>
                )}
                {!isUserPage && (
                  <li className="nav-item">
                    <Link to="/user" className="nav-link">User Profile</Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>

        <div className="d-flex align-items-center">
          {!isLoginPage && (
            <div id="username-display" className="info-display text-center me-3">
              <p className="mb-0"><strong>Logged in as:</strong> {username}</p>
            </div>
          )}

          <img src="/voting-icon.webp" alt="Right Logo" className="header-logo right-logo" />
        </div>
      </div>
    </header>
  );
}
