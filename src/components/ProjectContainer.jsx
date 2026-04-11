function ProjectContainer({ project }) {
  return (
    <>
      <img src={`projects/${project.image}.png`} alt={`${project.name}`} />
      <div className="text-container">
        <p>{project.name}</p>
        <p>{project.description}</p>
      </div>
    </>
  );
}

export default ProjectContainer;
