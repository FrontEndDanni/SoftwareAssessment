import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import WorkExperience from './components/WorkExperience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import projectsData from './data/projects';
import Artwork from './components/Artwork';


function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Define the number of projects to display
  const numProjectsToShow = showAllProjects ? projectsData.length : 3;

  return (
    <div className="App">
      <Navbar />
      <h1>Dannika Dull</h1>
      <AboutMe />
      <WorkExperience positions={projectsData.slice(-3)} />
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.slice(0, numProjectsToShow).map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      {showAllProjects ? (
        <button
        className="button"
        onClick={() => setShowAllProjects(false)}>Minimize Projects</button>
      ) : (
        <button 
        className="button"
        onClick={() => setShowAllProjects(true)}>View All Projects</button>
      )}
           <div className="artwork-container"
           id="artwork-section">
        <Artwork />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;