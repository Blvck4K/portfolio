import React from 'react';
import { Monitor, Server, Database, Settings } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "PHP"]
    },
    {
      title: "Database & Tools",
      icon: <Database size={24} />,
      skills: ["SQL", "Supabase", "Git", "GitHub"]
    },
    {
      title: "Other",
      icon: <Settings size={24} />,
      skills: ["API Integration", "SEO Optimization", "UI/UX Design", "Deployment (Vercel)"]
    }
  ];

  return (
    <section className="section skills" id="skills">
      <h2 className="section-title reveal">Technical Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            className="skill-card glass-panel reveal"
            key={index}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="skill-header">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
