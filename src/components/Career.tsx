import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer</h4>
                <h5>Qrious Tech Team LLP · Ahmedabad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and enhancing backend services using Java and Spring Boot.
              Working on scalable microservices, REST APIs, and performance
              improvements across multiple domains.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Group Takey · Ahmedabad</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Contributed to backend development by optimizing logic, integrating
              APIs, collaborating with teams, and resolving technical challenges to
              deliver successful projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Key highlights</h4>
                <h5>Projects & achievements</h5>
              </div>
              <h3>—</h3>
            </div>
            <p>
              Built scalable RESTful APIs handling high traffic (~5K requests/min),
              reduced load by 40% through performance optimization, and improved
              database efficiency by 29% through query and data-access tuning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
