import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Founder & Full Stack Developer",
      company: "Zizzystores",
      period: "2026 – Present",
      description: [
        "Built and launched an e-commerce platform targeting Nigerian brands",
        "Developed pricing and domain strategy competing with platforms like Shopify",
        "Designed growth strategies using SEO, Instagram marketing, and paid ads",
        "Created systems for onboarding and converting brand owners"
      ]
    },
    {
      role: "Founder & Developer",
      company: "Zizzy AI",
      period: "2026 – Present",
      description: [
        "Developed AI-powered chatbot for education and development support",
        "Implemented multi-mode UX system for different user types",
        "Managed AI cost optimization and system scalability"
      ]
    }
  ];

  return (
    <section className="section experience" id="experience">
      <h2 className="section-title reveal">Experience & Education</h2>
      
      <div className="experience-container">
        <div className="timeline-container">
          <h3 className="timeline-title reveal"><Briefcase size={24} /> Work Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item reveal" key={index} style={{transitionDelay: `${index * 0.1}s`}}>
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <div className="timeline-header">
                    <h4>{exp.role}</h4>
                    <span className="company">{exp.company}</span>
                  </div>
                  <div className="timeline-period">
                    <Calendar size={14} /> {exp.period}
                  </div>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-container reveal" style={{transitionDelay: '0.3s'}}>
          <h3 className="timeline-title"><GraduationCap size={24} /> Education</h3>
          <div className="education-card glass-panel">
            <h4>Bingham University</h4>
            <span className="degree">Bachelor’s Degree in Cybersecurity</span>
            <div className="status">In Progress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
