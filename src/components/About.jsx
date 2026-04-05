import Education from "./Education";
import TechStack from "./TechStack";

function About({ stacks, educations }) {
  return (
    <div className="about-tab">
      <div className="about-tab-inner">
        <h2>About Me</h2>
        <div className="about-fst-para">
          <h3>Education</h3>
          <div>
            {educations.map((education) => (
              <Education education={education} key={education.id} />
            ))}
          </div>
        </div>
        <div className="tech-stack-box">
          <h3>My Tech Stack</h3>
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
