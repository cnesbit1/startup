import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { LoginForm } from '../components/loginform';
import { SignupForm } from '../components/signupform';
import '../app.css';

export function Login() {
  return (
    <div className="container-fluid">
      <Header title="BallotBox Exchange" />
      <main>
        <section id="ballotbox-exchange">
          <h2>Welcome to BallotBox Exchange</h2>
          <div id="elevator-pitch">
                    <p>Introducing "BallotBox Exchange"— a platform where individual creativity meets community collaboration. BallotBox Exchange empowers users to submit their best ideas, websites, text, and more, while voting on others using various systems like ranked choice, majority rule, and approval voting. Explore how different voting methods influence outcomes and discover which ideas rise to the top based on collective preferences.</p>
                </div>
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
