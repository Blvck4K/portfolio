import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import Github from './icons/Github';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Unbley",
      role: "Founder & Developer",
      tech: ["React", "Supabase", "Paystack", "Vercel"],
      description: [
        "Built a platform that enables brands to create custom online stores with their own domains",
        "Designed a scalable architecture where each brand gets a separate storefront",
        "Integrated Paystack payment system for transactions",
        "Developed SEO-driven blog system to attract organic traffic",
        "Created admin-based blog publishing system with metadata optimization",
        "Implemented WhatsApp integration for direct customer communication",
        "Designed UI/UX focused on a modern, premium brand experience"
      ],
      image: "https://raw.githubusercontent.com/Blvck4K/Jss-png/main/logogo.png",
      links: {
        live: "https://unbley.vercel.app",
        github: "https://github.com/Blvck4K/unbley"
      }
    },
    {
      title: "Zizzy AI",
      role: "Founder & Developer",
      tech: ["React", "Node.js", "SQL", "AI APIs (Gemini, Mistral)"],
      description: [
        "Built an AI assistant with two modes: Explorer Mode (general users) and Developer Mode (coding & debugging support)",
        "Designed onboarding system with dynamic user experience switching",
        "Implemented memory system (user name + personalization)",
        "Optimized for low-cost AI usage and scalability",
        "Focused on providing educational and developer support tools"
      ],
      image: "https://raw.githubusercontent.com/Blvck4K/Jss-png/main/zizzyai.png",
      links: {
        live: "https://zizzy-v1.vercel.app/",
        github: "https://github.com/Blvck4K/zizzy-v1"
      }
    },
    {
      title: "Ardsan",
      role: "Accounting & ERP System",
      tech: ["HTML", "CSS", "JavaScript", "SQL"],
      description: [
        "Developed a basic accounting management system",
        "Implemented features for tracking business operations",
        "Designed structured database for handling records"
      ],
      image: "https://raw.githubusercontent.com/Blvck4K/Jss-png/main/ardsan.png",
      links: {
        live: "https://ardsan.org",
        github: "https://github.com/Blvck4K/Ardsan"
      }
    }
  ];

  return (
    <section className="section projects" id="projects">
      <h2 className="section-title reveal">Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card glass-panel reveal" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.links.live} className="project-link" aria-label="Live Demo">
                  <ExternalLink size={24} />
                </a>
                <a href={project.links.github} className="project-link" aria-label="GitHub Repository">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-role">{project.role}</span>
              </div>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">
                    <Code size={12} style={{ marginRight: '4px' }} /> {t}
                  </span>
                ))}
              </div>

              <ul className="project-description">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
