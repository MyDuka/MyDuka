import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to MyDuka</h1>
      <p>MyDuka is an inventory app that helps you keep track of your stock and generate reports.</p>
      <Link to="/login" className="button">Log In</Link>
      <Link to="/register" className="button">Register</Link>
    </div>
  );
};

export default LandingPage;