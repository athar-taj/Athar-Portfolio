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
                <h5>Qrious Tech Team LLP · Ahmedabad, India</h5>
              </div>
              <h3>Jan 2025 – Present</h3>
            </div>
            <p>
              • Engineered scalable microservices and resilient RESTful APIs in Java and Spring Boot for high-throughput FinTech and Food Delivery applications.<br />
              • Architected and implemented GenAI features utilizing LangChain, LangGraph, and RAG pipelines for intelligent enterprise data querying and automated workflows.<br />
              • Conducted root-cause analysis, production debugging, and performance optimization for live distributed services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Group Takey · Ahmedabad, India</h5>
              </div>
              <h3>Nov 2022 – Jan 2025</h3>
            </div>
            <p>
              • Designed and maintained distributed microservices for Telecom and School Management enterprise platforms.<br />
              • Built automated outbound dialing systems, IVR routing engines, real-time agent supervision dashboards, and asynchronous messaging pipelines.<br />
              • Collaborated directly with stakeholders to translate business requirements into robust backend implementations and reliable database schemas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
