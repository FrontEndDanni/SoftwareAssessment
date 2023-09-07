import React from 'react';
import '../App.css';
import workExperienceData from '../data/workExperience';
import ResumeDownloadButton from './ResumeDownloadButton';

const WorkExperience = () => {
  const pdfUrl = '/pdf/Dannika Dull.pdf'; 
  return (
    <div className="WorkExperience">
      <h2>Work Experience</h2>
      <div className="positions">
        {workExperienceData.map((position, index) => (
          <div className="position" key={index}>
            <h3>{position.title}</h3>
            <p>{position.company}</p>
            <p>{position.date}</p>
          </div>
        ))}
      </div>
      <ResumeDownloadButton pdfUrl={pdfUrl} fileName="Dannika_Dull.pdf" />
    </div>
  );
};

export default WorkExperience;
