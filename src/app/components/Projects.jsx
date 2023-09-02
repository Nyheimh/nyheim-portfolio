// pages/projects.js
import Image from 'next/image';
import projectsData from '../projects/projectsData.json'

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <Image src={project.image} alt={project.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
