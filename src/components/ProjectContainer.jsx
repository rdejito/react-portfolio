function ProjectContainer({ project }) {
  return (
    <div>
      <img src={`projects/${project.image}.png`} alt={`${project.name}`} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectContainer;
