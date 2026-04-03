import ProjectContainer from "./ProjectContainer";

function Projects({ projects }) {
  return (
    <div className="projects-tab">
      <div className="projects-tab-inner">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectContainer project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
