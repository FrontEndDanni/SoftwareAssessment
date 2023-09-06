import React from 'react';
import '../App.css';
import workExperienceData from '../data/workExperience';

const WorkExperience = () => {
    return (
      <div className="WorkExperience">
        <h2>Work Experience</h2>
        <div className="positions">
          {workExperienceData.map((position, index) => (
            <div className="position" key={index}>
              <h3>{position.title}</h3>
              <p>{position.company}</p>
              <p>{position.date}</p>
              <p>{position.description}</p>
            </div>
          ))}
        </div>
        {/* Add the download resume button here */}
      </div>
    );
  };
  
  export default WorkExperience;