import React from 'react';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import WorkExperience from './components/WorkExperience';
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer'; // Import Footer component
import projectsData from './data/projects';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar component */}
      <h1>Dannika Dull</h1>
      <AboutMe />
      <WorkExperience positions={projectsData.slice(-3)} />
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
