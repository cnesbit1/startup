import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { LoginForm } from '../components/loginform';
import { SignupForm } from '../components/signupform';

export function Login() {
  return (
    <div className="container-fluid">
      <Header title="BallotBox Exchange" />
      <main>
        <section id="ballotbox-exchange">
          <h2>Welcome to BallotBox Exchange</h2>
          <div id="auth-container" className="d-flex justify-content-around">
            <LoginForm />
            <SignupForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
