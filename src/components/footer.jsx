// Footer.jsx
import React from 'react';

export function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white py-4">
      <div className="row justify-content-between">
        <div className="col-md-4 footer-section">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:connornesbit@gmail.com" className="text-warning">connornesbit@gmail.com</a></p>
          <p>Phone: (480) 798-7427</p>
          <p>GitHub: <a href="https://github.com/cnesbit1/startup" className="text-warning">Startup Repository</a></p>
        </div>
        <div className="col-md-4 footer-section">
          <h4>About Us</h4>
          <p>BallotBox Exchange empowers communities through transparent voting and collaboration.</p>
          <p>&copy; 2024 BallotBox Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
