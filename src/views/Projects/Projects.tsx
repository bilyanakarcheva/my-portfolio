import { PROJECTS } from "../../constants/constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="projects" className="border-b border-base-200 flex flex-col w-full h-auto min-h-screen pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-accent text-center my-20">
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center">
            <div className="w-full"></div>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              src={project.image}
              height={400}
              width={400}
              alt={project.title}
              className="mb-6 rounded"
            />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-600">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-orange-900">
                  {tech}
                </span>
              ))}
              {/* <div className="flex flex-wrap justify-between gap-2">
                <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
                <a href={project.github} target="_blank" rel="noreferrer">View Code</a>
              </div> */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;