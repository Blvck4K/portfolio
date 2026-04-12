import React from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';
import Github from './icons/Github';
import Twitter from './icons/Twitter';
import Whatsapp from './icons/Whatsapp';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section" id="contact">
      <div className="footer-content glass-panel reveal">
        <div className="contact-info">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-subtitle">Open for opportunities and collaborations.</p>

          <div className="contact-links">
            <a href="mailto:akpasuazeh@gmail.com" className="contact-link">
              <Mail className="contact-icon" />
              <span>akpasuazeh@gmail.com</span>
            </a>

            <a href="https://github.com/Blvck4K" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github className="contact-icon" />
              <span>github.com/Blvck4K</span>
            </a>

            <a href="https://wa.link/w0tumi" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Whatsapp className="contact-icon" />
              <span>+2349153625566</span>
            </a>

            <a href="https://x.com/AAkpasu" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Twitter className="contact-icon" />
              <span>@AAkpasu</span>
            </a>

            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="interests-section">
          <h3>Interests</h3>
          <div className="interests-tags">
            <span className="interest-tag">AI in Web Development</span>
            <span className="interest-tag">Startup Growth & Product Design</span>
            <span className="interest-tag">E-commerce Innovation in Africa</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom reveal" style={{ transitionDelay: '0.2s' }}>
        <p>&copy; {new Date().getFullYear()} Isaac Akpasu. Built with React <Heart size={14} className="heart-icon" /> & Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
