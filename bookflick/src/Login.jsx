import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  return (
    <div className="login-page">
      <header>
        <h1>📚 BookFlick 🎬</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="login-box">
        <h2>Login to BookFlick</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
