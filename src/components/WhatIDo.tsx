import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%" style={{ color: "var(--borderColor)" }}>
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%" style={{ color: "var(--borderColor)" }}>
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BACKEND &amp; SYSTEMS</h3>
              <h4>Microservices, resilient APIs, and data architecture</h4>
              <p>
                Building resilient microservices and high-throughput RESTful APIs
                in Java &amp; Spring Boot. Architecting distributed systems with clean boundaries,
                caching, message brokers, and transactional data integrity.
              </p>
              <h5>Core &amp; data</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">Spring Security</div>
                <div className="what-tags">RESTful APIs</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Redis</div>
                <div className="what-tags">Apache Kafka</div>
                <div className="what-tags">RabbitMQ</div>
                <div className="what-tags">AWS</div>
                <div className="what-tags">Docker</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%" style={{ color: "var(--borderColor)" }}>
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI, GENAI &amp; APPS</h3>
              <h4>LangChain, RAG pipelines, and full-stack solutions</h4>
              <p>
                Developing intelligent GenAI features, agentic workflows, and RAG pipelines
                for natural language enterprise data querying and automated multi-step operations.
              </p>
              <h5>AI &amp; platforms</h5>
              <div className="what-content-flex">
                <div className="what-tags">LangChain</div>
                <div className="what-tags">LangGraph</div>
                <div className="what-tags">RAG Pipelines</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">Elasticsearch (ELK)</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Angular</div>
                <div className="what-tags">CI/CD</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
