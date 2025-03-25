import React from 'react';
import './LionelPortfolio.css'; 

const LionelPortfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="navbar"> 
        <div className="title"></div> 
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
        </div>
      </div>
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
    </div>
  );
};

export default LionelPortfolio;