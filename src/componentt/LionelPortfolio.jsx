import React, { useEffect, useRef } from 'react';
import './LionelPortfolio.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import gsap from 'gsap';
import Contactme from './Contactme';

const Skills = () => {

  useEffect(() => {
    gsap.fromTo('.skill-logo', 
       {
        scale: 0.8
      },
      {
        scale: 1,
        ease: "bounce.inOut",
        duration:6,
        repeat: -1,
        yoyo: true,
      }
    );
    gsap.fromTo('.react-logo',
      {
        rotate: 0
      },
      {
        rotate: 360,
        yoyo: true,
        repeat: -1,
        duration: 5
      }
    );
  }, []);
  

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <ul>
        <li>
          <img src="src/assets/html.webp" alt="HTML" className="skill-logo" />
          HTML
        </li>
        <li>
          <img src="src/assets/download (5).png" alt="CSS" className="skill-logo" />
          CSS
        </li>
        <li>
          <img src="src/assets/download (2).jpg" alt="JavaScript" className="skill-logo" />
          JavaScript
        </li>
        <li>
          <img src="src/assets/react.png" alt="React" className="react-logo" />
          React
        </li>
        <li>
          <img src="src/assets/download (6).png" alt="GSAP" className="skill-logo" />
          GSAP
        </li>
      </ul>
    </div>
  );
};

const LionelPortfolio = () => {
  return (
    <Router>
      <div className="portfolio-container">
        <div className="navbar">
          <div className="title"></div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/contactme ">contact me</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactme" element={<Contactme />} />
          <Route path="/skills" element={<Skills />} />
          
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="content-container">
      <div className="name-section">
        <h1>Lionel Liauw</h1>
        <p>
          Hello! I'm Lionel Liauw, a passionate Web Developer with a focus on creating seamless and dynamic
          user experiences.
          I enjoy crafting visually engaging websites and web applications that prioritize user interaction and
          accessibility. With a strong background in front-end technologies and a keen eye for design, I aim to
          build digital experiences that not only look great but also function flawlessly across devices.
          Feel free to contact me if you're looking for a dedicated and creative developer to bring your ideas to life!
          gi
        </p>
      </div>

      <div className="photo-section">
        <img src="src/assets/WhatsApp Image 2025-03-25 at 12.30.18.jpeg" alt="Lionel Liauw" />
      </div>
    </div>
  );
};

const About = () => <div>About Page Content</div>;
const Portfolio = () => <div>Portfolio Page Content</div>;

export default LionelPortfolio;