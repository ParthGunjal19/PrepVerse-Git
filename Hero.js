import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import wee from "./wee.png"; 

import ques from "./ques.png";
import read from "./read.png";
import read1 from "./read1.png";
import read2 from "./read2.png";
import read3 from "./read3.png";
import read4 from "./read4.png";
import para from "./para.png"; 

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="app">

      {/*  HERO SECTION */}
    <section className="hero-section">
      <div className="hero-image">
        <img src={wee} alt="Hero illustration" />
      </div>
      <div className="hero-text">
        <h1>Preparing for Placement? Confused?</h1>
        <p>Don't worry! Our complete placement preparation masterclass is here to help you.</p>
        <div className="hero-buttons">
          <button className="btn-blue">Start Preparation</button>
        </div>
      </div>
    </section>



      {/* FEATURES SECTION */}
      <section id="features" className="features">
        <div className="features-heading-inline" data-aos="zoom-in">
          <h2>What is Prepverse?</h2>
          <img src={ques} alt="What is Prepverse" className="inline-img" />
        </div>
        <div className="feature-grid">
          <div className="feature-card" data-aos="fade-up">
            <h3>A Placement Preparation Platform</h3>
            <p>Practice questions with detailed solutions</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Interview Questions</h3>
            <p>Technical + HR questions with answers</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Mock Tests</h3>
            <p>Simulate real-time exam environment</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Chatbot Help</h3>
            <p>24/7 chatbot to guide your preparation</p>
          </div>
        </div>
      </section>

      {/* WHY PREPVERSE SECTION */}
      <section className="why-section">
        <div className="why-heading-inline" data-aos="zoom-in">
          <h2>WHY PREPVERSE ?</h2>
          <img src={read} alt="Why Prepverse" className="inline-img" />
        </div>

        <div className="why-scroll-wrapper">
          <div className="why-big-cards scroll-animate">
            <div className="why-big-card">
              <img src={read1} alt="Smart Syllabus" className="why-card-img" />
              <h3>📚 Smart Syllabus</h3>
              <p>Our content is curated with the latest trends in placement drives including coding, aptitude, and soft skills. </p>
            </div>
            <div className="why-big-card">
              <img src={read2} alt="Mentor Connect" className="why-card-img" />
              <h3>🎓 Mentor Connect</h3>
              <p>Access personalized mentorship through live sessions and private chat from working professionals at top tech firms.</p>
            </div>
            <div className="why-big-card">
              <img src={read3} alt="Global Practice Arena" className="why-card-img" />
              <h3>🌐 Global Practice Arena</h3>
              <p>Engage in coding competitions and group hackathons with students nationwide.</p>
            </div>
            <div className="why-big-card">
              <img src={read4} alt="Skill Badges" className="why-card-img" />
              <h3>🏆 Skill Badges</h3>
              <p>Showcase your accomplishments with smart badges for key milestones.  </p>
            </div>
          </div>
        </div>
      </section>
{/* PARA */}
<section class="para-section">
  <div class="para-content">
    <div class="para-text">
      <h2>Our Content</h2>
     
      <ul>
        <li>Aptitude Questions</li>
        <li>C, C++, Java, Python</li>
        <li>Interview questions</li>
        <li>Interview prep with mock interviews</li>
        <li>Mock tests for practice</li>
        <li>ChatBot support</li>
      </ul>
     
    </div>
    <div class="para-image">
      <img src={para}alt="Para Promo" />
    </div>
  </div>
</section>
    </div>
  );
}