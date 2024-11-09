import React from 'react';

export function Footer() {
  return (
    <footer className="bg-dark text-white-50">
      <div className="footer-container container-fluid">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:connornesbit@gmail.com">connornesbit@gmail.com</a></p>
          <p>Phone Number: (480) 798-7427</p>
          <p>GitHub: <a href="https://github.com/cnesbit1/startup">Startup Repository</a></p>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p>BallotBox Exchange is dedicated to empowering communities through transparent voting and collaboration.</p>
          <p>&copy; 2024 BallotBox Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
