import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import pree from './prep.png';
import { Link } from 'react-router-dom';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => window.AOS && window.AOS.init({ duration: 1000, once: true });
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="full-width-container">
      <div className="about-container full-width">
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
          <div className="logo">PrepVerse</div>
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/hero ">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/feedback">Feedback</Link>
          </div>
          <div
            className={`hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyPress={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <section className="about-hero-section full-width">
          <div className="about-hero-left">
            <img src={pree} alt="PrepVerse Logo" className="about-hero-logo" />
          </div>
          <div className="about-hero-right" data-aos="fade-left">
            <h1 className="about-hero-title">PrepVerse</h1>
            <p className="about-hero-subtitle">
              From aptitude to interviews, PrepVerse provides the comprehensive tools you need to succeed.
            </p>
            <div className="about-hero-features">
              <div className="feature-item" title="Aptitude tests">
                <svg>...</svg>
                <span>Aptitude tests</span>
              </div>
              <div className="feature-item" title="Coding tasks">
                <svg>...</svg>
                <span>Coding tasks</span>
              </div>
              <div className="feature-item" title="Interview practice">
                <svg>...</svg>
                <span>Interview practice</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-mission-section full-width" data-aos="fade-up">
          <h2>Our Mission</h2>
          <p>
            At PrepVerse, we aim to empower students and job seekers by providing essential
            resources and real-world practice to prepare them for their dream careers.
          </p>
        </section>

        <section className="about-cards-section full-width" data-aos="fade-up">
          <div className="about-card">
            <h3>Mock Tests</h3>
            <p>Simulate real test environments with timed mock tests to build confidence.</p>
          </div>
          <div className="about-card">
            <h3>Code Challenges</h3>
            <p>Improve your logic and coding skills with daily challenges.</p>
          </div>
          <div className="about-card">
            <h3>Interview Guides</h3>
            <p>Access curated resources and tips from top interviewers.</p>
          </div>
        </section>

        <section className="about-testimonials-section full-width" data-aos="fade-up">
          <h2>What Our Users Say</h2>
          <blockquote className="about-testimonial">
            <p>"PrepVerse helped me land my first tech internship. The mock tests were spot on!"</p>
            <footer>- Riya P., Engineering Student</footer>
          </blockquote>
          <blockquote className="about-testimonial">
            <p>"Coding challenges were fun and helped me stay consistent."</p>
            <footer>- Akash M., Job Seeker</footer>
          </blockquote>
        </section>

        <section className="about-cta-section full-width" data-aos="fade-up">
          <h2>Ready to start your prep journey?</h2>
          <button className="about-cta-button">Join Now</button>
        </section>
      </div>
    </div>
  );
}
