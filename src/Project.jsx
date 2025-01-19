import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://example.com/project1' // Replace with actual project link
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://example.com/project2' // Replace with actual project link
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects</h2>
      <hr />
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Project;