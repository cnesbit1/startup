import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function Login() {
  return (
    <div className="container-fluid bg-secondary text-center">
      <Header title="BallotBox Exchange" />
      <main>
        <section id="ballotbox-exchange">
          <h2>Welcome to BallotBox Exchange</h2>
          <div id="elevator-pitch">
            <p>Introducing "BallotBox Exchange"—a platform where individual creativity meets community collaboration...</p>
          </div>

          <div id="auth-container" className="d-flex justify-content-around">
            <div id="login-form">
              <h3>Login</h3>
              <label htmlFor="login-username">Username:</label>
              <input type="text" id="login-username" />
              <label htmlFor="login-password">Password:</label>
              <input type="password" id="login-password" />
              <button type="button">Login</button>
            </div>

            <div id="sign-in-form">
              <h3>Sign Up</h3>
              <label htmlFor="signin-username">Username:</label>
              <input type="text" id="signin-username" />
              <label htmlFor="signin-password">Password:</label>
              <input type="password" id="signin-password" />
              <label htmlFor="signin-email">Email:</label>
              <input type="email" id="signin-email" />
              <button type="button">Sign Up</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
