// components/Skills/Skills.jsx
import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "Responsive Design", level: "Advanced" },
  { name: "REST APIs", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Technologies & tools I use frequently</p>

        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-card">
              <div className="skill-icon">{s.name[0]}</div>
              <div className="skill-info">
                <h3>{s.name}</h3>
                <p className="level">{s.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
