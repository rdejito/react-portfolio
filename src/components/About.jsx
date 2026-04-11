import Education from "./Education";
import TechStack from "./TechStack";

function About({ stacks, educations }) {
  return (
    <div className="about-tab">
      <div className="about-tab-inner">
        <h2>About Me</h2>
        <div className="about-tab-fst-box">
          <h3>Education</h3>

          <div className="wrapper">
            {educations.map((education) => (
              <Education education={education} key={education.id} />
            ))}
          </div>
        </div>
        <div className="tech-stack-box">
          <h4>My Tech Stack</h4>
          <div>
            {stacks.map((stack) => (
              <TechStack stack={stack} key={stack.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
