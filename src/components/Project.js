import React from 'react';
import '../App.css';

const Project = ({ title, description, link }) => {
  return (
    <div className="Project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
};

export default Project;
