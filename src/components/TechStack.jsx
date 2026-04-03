function TechStack({ stack }) {
  return <img src={`stacks/${stack.image}`} alt={`${stack.label}`} />;
}

export default TechStack;
