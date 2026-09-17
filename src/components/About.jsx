import React from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="section-title reveal">Professional Summary</h2>
      
      <div className="about-content">
        <div className="about-text glass-panel reveal">
          <p>
            Innovative and self-driven Full Stack Web Developer and Founder with hands-on experience building real-world digital products from scratch. Skilled in developing scalable web applications, AI-powered platforms, and e-commerce solutions tailored for emerging markets.
          </p>
          <br/>
          <p>
            Founder of <strong>Unbley</strong>, a platform helping brands launch fully functional online stores with custom domains, and <strong>Zizzy AI</strong>, an intelligent assistant designed for both general users and developers.
          </p>
          <br/>
          <p>
            Passionate about solving real business problems with technology, especially in the Nigerian digital economy.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card glass-panel reveal" style={{transitionDelay: '0.1s'}}>
            <Rocket className="highlight-icon" size={32} />
            <h3>Core Strengths</h3>
            <ul>
              <li>Startup mindset & product thinking</li>
              <li>Building real-world solutions from idea to launch</li>
              <li>Strong UI/UX sense (modern, premium design focus)</li>
              <li>Growth & marketing understanding</li>
              <li>Problem-solving and fast execution</li>
            </ul>
          </div>
          
          <div className="highlight-card glass-panel reveal" style={{transitionDelay: '0.2s'}}>
            <Lightbulb className="highlight-icon" size={32} />
            <h3>Additional Highlights</h3>
            <ul>
              <li>Built multiple production-ready applications independently</li>
              <li>Experience with Nigerian market-focused tech solutions</li>
              <li>Strong understanding of e-commerce systems & user behavior</li>
              <li>Continuously experimenting with AI integrations in web apps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
