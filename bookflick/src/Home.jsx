import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h1>📚 BookFlick 🎬</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Find Your Next Movie or Book</h2>
          <p>Search, explore, and discover your favorites in seconds!</p>
          <a href="#" className="btn">🎥 Movies</a>
          <a href="#" className="btn">📖 Books</a>
        </div>
      </section>

      <section id="about">
        <h2>About BookFlick</h2>
        <p>BookFlick is your one-stop platform to explore the world of entertainment. Whether you are a movie enthusiast or a book lover, we help you find the best picks in just a few clicks.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out to us anytime.</p>
        <div className="contact-details">
          <h3>📍 Address</h3>
          <p>BookFlick HQ, 123 Story Lane, Hyderabad, India</p>
          <h3>📧 Email</h3>
          <p>support@bookflick.com</p>
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
          <h3>🌐 Website</h3>
          <p>www.bookflick.com</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
