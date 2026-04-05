import "../globals.css";

function TechStack({ stack }) {
  return (
    <img
      src={`stacks/${stack.image}`}
      alt={`${stack.label}`}
      className="stacks"
    />
  );
}

export default TechStack;
