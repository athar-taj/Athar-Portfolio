import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Developer with 4 years of experience building resilient microservices,
          high-throughput APIs, and distributed systems in Java &amp; Python.
          Specialized in enterprise platforms across FinTech, Healthcare, and Food Delivery,
          with hands-on expertise building production AI agents, LangChain workflows, and RAG pipelines.
          I care about zero-downtime reliability and knowing when systems break before users ever notice.
        </p>
      </div>
    </div>
  );
};

export default About;
