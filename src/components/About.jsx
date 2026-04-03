import TechStack from "./TechStack";

function About({ stacks }) {
  return (
    <div className="about-tab">
      <div className="about-tab-inner">
        <h2>About Me</h2>
        <div>
          <div className="about-fst-para">
            <p>
              Student from blah blah blah... Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Obcaecati distinctio repudiandae
              aliquid nemo optio tenetur quam quod ad perferendis soluta
              voluptas veniam reiciendis, non in exercitationem error saepe nisi
              repellendus!
            </p>
          </div>
          <div className="tech-stack">
            <h3>My Tech Stack</h3>
            <div>
              {stacks.map((stack) => (
                <TechStack stack={stack} key={stack.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
