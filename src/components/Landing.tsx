import { PropsWithChildren } from "react";
import { MdDownload, MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="landing-badge">
              <span>
                4 Years Crafting Resilient Systems &amp; Autonomous AI</span>
            </div>
            <h2>Hello! I'm</h2>
            <h1>
              ATHAR
              <br />
              <span>SHAIKH</span>
            </h1>
            <p className="landing-pitch">
              Software Developer specializing in <strong>Java · Python · AI</strong>.
              I engineer high-throughput microservices, real-time telephony pipelines, and intelligent GenAI agents that hold up when traffic spikes in production.
            </p>
            <div className="landing-actions">
              <a
                href="/ATHAR.pdf"
                target="_blank"
                rel="noreferrer"
                className="landing-btn landing-btn-primary"
                data-cursor="disable"
              >
                <MdDownload /> Resume
              </a>
              <a
                href="https://www.linkedin.com/in/athar-shaikh-b9035931b/"
                target="_blank"
                rel="noreferrer"
                className="landing-btn landing-btn-secondary"
                data-cursor="disable"
              >
                <FaLinkedinIn /> LinkedIn <MdArrowOutward />
              </a>
              <a
                href="https://github.com/shaikh-athar"
                target="_blank"
                rel="noreferrer"
                className="landing-btn landing-btn-secondary"
                data-cursor="disable"
              >
                <FaGithub /> GitHub <MdArrowOutward />
              </a>
              <a
                href="https://medium.com/@contact.athar.shaikh"
                target="_blank"
                rel="noreferrer"
                className="landing-btn landing-btn-secondary"
                data-cursor="disable"
              >
                <FaMedium /> Medium <MdArrowOutward />
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software</div>
              <div className="landing-h2-2">AI</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
