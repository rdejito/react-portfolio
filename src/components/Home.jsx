function Home({ setActiveTab }) {
  return (
    <div className="home-tab">
      <div className="home-tab-inner">
        <div className="home-tab-hero">
          <img src="hero/pfp-icon.png" alt="pfp-icon" width="256px" />
        </div>
        <div className="home-tab-hero-name">
          <h2>Hi, I'm Rainiel</h2>
          <p>Computer Engineering Technology Student</p>
          <div className="btn-wrapper">
            <button
              className="home-btn hollow-btn"
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className="home-btn block-btn"
              onClick={() => window.open("/cv.pdf")}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
