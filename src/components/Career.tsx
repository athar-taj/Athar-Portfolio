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
                <h4>Software Developer</h4>
                <h5>Qrious Tech Team LLP · Ahmedabad</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Building microservices and APIs in Java and Spring Boot for FinTech and Food Delivery, plus GenAI features with LangChain and RAG. I spend real time debugging production issues under live traffic, not just shipping features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Group Takey · Ahmedabad</h5>
              </div>
              <h3>2022 – 2025</h3>
            </div>
            <p>
              Handled backend engineering and system design for School Management and Telecom platforms on microservices, working directly with clients to turn requirements into working systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
