import { PROJECTS } from "../../constants/constants";

function Projects() {
  return (
    <div id="projects" className="border-b border-base-200 flex flex-col w-full h-auto min-h-screen pb-4">
      <h2 className="text-4xl font-bold text-accent text-center my-20">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (  
          <div key={index}>
            <img src={project.image} alt={project.title} style={{ width: '300px', height: 'auto' }}></img>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;