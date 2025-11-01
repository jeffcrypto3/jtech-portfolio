// components/Projects/Projects.jsx
import React from "react";
import "./Projects.css";
import { miniProjects, professionalProjects } from "./projectsData";

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="proj-media">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="proj-body">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="proj-actions">
        <a
          className="btn"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <p className="section-sub">Mini Projects</p>
        <div className="projects-grid">
          {miniProjects.map((p, index) => (
            <ProjectCard key={index} project={p} />
          ))}
        </div>

        <p className="section-sub" style={{ marginTop: "2.25rem" }}>
          Professional Projects
        </p>
        <div className="projects-grid">
          {professionalProjects.map((p, index) => (
            <ProjectCard key={index} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
