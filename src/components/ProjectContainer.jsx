function ProjectContainer({ project }) {
  return (
    <div>
      <img src="#" alt={`${project.name}`} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectContainer;
