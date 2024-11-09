import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function User() {
  return (
    <div className="container-fluid bg-secondary text-center">
      <Header title="User Profile" />
      <main>
        <section id="user-profile">
          <h2>User Profile Information</h2>
          {/* User profile content here */}
        </section>

        <section id="idea-submission">
          <h2>Idea Submission</h2>
          {/* Idea submission form here */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
