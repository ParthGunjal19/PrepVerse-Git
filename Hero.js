import React, { useEffect, useState } from 'react';
import pree from './pree.svg';
import inter from './inter.svg';
import './Home.css';
import read from './read.png';
import prep from './prep.png';
import read1 from './read1.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional but useful for components like modals


export default function Hero() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AOS init
  useEffect(() => {
    const aosCssLink = document.createElement('link');
    aosCssLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    aosCssLink.rel = 'stylesheet';
    document.head.appendChild(aosCssLink);

    const aosJsScript = document.createElement('script');
    aosJsScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosJsScript.onload = () => {
      if (window.AOS) {
        window.AOS.init({ duration: 1000, once: true });
      }
    };
    document.body.appendChild(aosJsScript);

    return () => {
      if (document.head.contains(aosCssLink)) {
        document.head.removeChild(aosCssLink);
      }
      if (document.body.contains(aosJsScript)) {
        document.body.removeChild(aosJsScript);
      }
    };
  }, []);

  return (
    <div className="app">
      {/* ---------- Navbar ---------- */}
      <nav className={`glass-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">PrepVerse</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
              <Link to="/Hero">Home</Link>
          <Link to="/about">AboutUs</Link> 
          <Link to="#aptitude">Contact Us</Link>
          <Link to="#coding">FeedBack</Link>
        </div>
        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* ---------- Hero Section ---------- */}
      <section className="hero-section">
        <div className="hero-content-left" data-aos="fade-right">
          <img src={pree} alt="Pree Logo" className="hero-logo" />
        </div>
        <div className="hero-content-right" data-aos="fade-left">
          <h1 className="aurora-text"><span>PrepVerse</span></h1>
          <p>From aptitude to interviews, PrepVerse provides the comprehensive tools you need to succeed.</p>

          <div className="hero-features">
            <div className="feature-item">
              <svg className="icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span>Aptitude tests</span>
            </div>
            <div className="feature-item">
              <svg className="icon"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <span>Coding tasks</span>
            </div>
            <div className="feature-item">
              <svg className="icon"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67..."/></svg>
              <span>Interview practice</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">Start now</button>
          </div>
        </div>
      </section>

      {/* ---------- Placement Prep Section ---------- */}
      <section className="placement-prep-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Placement prep, <span className="highlight">streamlined</span></h2>
          <p>Leverage quizzes, coding tasks, and interview simulations to enhance your placement readiness.</p>
        </div>
        <div className="prep-grid">
          <div className="prep-card large-card" data-aos="fade-up" data-aos-delay="100">
            <img src="https://placehold.co/600x400/1a1a1a/FFFFFF?text=Aptitude" alt="Aptitude" />
            <h3>Targeted aptitude evaluations</h3>
          </div>
          <div className="prep-card large-card" data-aos="fade-up" data-aos-delay="200">
            <img src="https://placehold.co/600x400/1a1a1a/FFFFFF?text=Interview" alt="Interview" />
            <h3>Realistic interview simulations</h3>
          </div>
          <div className="prep-card small-card" data-aos="fade-up" data-aos-delay="300">
            <img src="https://placehold.co/400x300/1a1a1a/FFFFFF?text=Coding" alt="Coding" />
            <h3>Varied coding exercises</h3>
          </div>
          <div className="prep-card small-card" data-aos="fade-up" data-aos-delay="400">
            <img src="https://placehold.co/400x300/1a1a1a/FFFFFF?text=Analysis" alt="Analysis" />
            <h3>Comprehensive progress analysis</h3>
          </div>
        </div>
      </section>

      {/* ---------- Call to Action Section ---------- */}
      <section className="call-to-action-section">
        <div className="cta-content-left" data-aos="fade-right">
          <img src={inter} alt="Recruitment Hurdle" className="cta-main-image" />
        </div>
        <div className="cta-content-right" data-aos="fade-left">
          <h2>Conquer every recruitment hurdle</h2>
          <p>In-depth training for aptitude, coding, and interviews</p>
          <div className="highlight-stack">
            <span className="highlight-word delay-1">Learn</span>
            <span className="highlight-box delay-2">Improve</span>
            <span className="highlight-word delay-3">Master</span>
          </div>
          <button className="btn btn-primary">Join now</button>
        </div>
      </section>
      
      {/* CAROUSEL */}
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={read} class="d-block w-100" alt="..." 
  className="d-block w-100"
  style={{ height: '600px', objectFit: 'cover' }}
/>  
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-black">First slide label</h5>
        <p class="text-black">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={read1} class="d-block w-100" alt="..." 
       className="d-block w-100"
  style={{ height: '600px', objectFit: 'cover' }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-black">Second slide label</h5>
        <p class="text-black">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={prep} class="d-block w-100" alt="..." 
       className="d-block w-100"
  style={{ height: '600px', objectFit: 'cover' }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-black">Third slide label</h5>
        <p class="text-black">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      {/* ---------- Footer ---------- */}
      <footer className="footer-section">
        <div className="footer-left">
          <span className="footer-brand">ADVANCE YOUR <br /> CAREER WITH <br /> PRECISION</span>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="#aptitude">Aptitude</a>
            <a href="#coding">Coding</a>
            <a href="#mock">Mock</a>
            <a href="#interview">Interview</a>
            <a href="#resources">Resources</a>
            <a href="#support">Support</a>
            <a href="#legal">Legal</a>
          </div>
          <div className="social-icons">
            <a href="#">F</a>
            <a href="#">I</a>
            <a href="#">X</a>
            <a href="#">L</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
