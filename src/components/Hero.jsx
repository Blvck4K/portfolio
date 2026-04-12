import React from 'react';
import { MapPin, ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="location-badge reveal">
          <MapPin size={16} />
          <span>Abuja, Nigeria</span>
        </div>

        <h1 className="hero-title reveal" style={{ transitionDelay: '0.1s' }}>
          Hi, I'm <span className="text-gradient">Isaac Akpasu</span>
        </h1>

        <h2 className="hero-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
          Full Stack Web Developer & Founder
        </h2>

        <p className="hero-description reveal" style={{ transitionDelay: '0.3s' }}>
          Innovative and self-driven developer with hands-on experience building real-world digital products from scratch. Passionate about solving real business problems with technology, especially in the Nigerian digital economy.
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="hero-image-container reveal" style={{ transitionDelay: '0.5s' }}>
        <div className="hero-image-placeholder">
          {/* USER INSTRUCTION: Replace changing the src below to your personal image URL or path (e.g. import myImage from '../assets/my-image.jpg' and set src={myImage}) */}
          <img src="https://github.com/Blvck4K/Jss-png/blob/main/WhatsApp%20Image%202026-04-12%20at%204.14.28%20PM.jpeg" alt="Isaac Akpasu" />
          <div className="glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
