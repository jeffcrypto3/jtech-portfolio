// components/Skills/Skills.jsx
import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 90 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Git", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-sub">Technologies & tools I work with</p>

        <div className="skills-container">
          {skillsData.map((category) => (
            <div key={category.category} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
