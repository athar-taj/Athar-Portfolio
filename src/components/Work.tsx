import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Project {
  title: string;
  category: string;
  badge: string;
  problem: string;
  whatIBuilt: string;
  keyDecisions: string;
  result: string;
  architectureNotes?: string;
  skills: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Patient Care Management Platform",
    category: "MEDHOST · Healthcare & Enterprise EHR",
    badge: "Client work, source confidential",
    problem:
      "Healthcare providers needed a unified, compliant platform to manage complex EHR records, provider-patient scheduling, and prescription histories while reducing severe administrative delays during patient intake.",
    whatIBuilt:
      "Engineered high-throughput RESTful microservices for provider profiles, EHR records, prescriptions, and medical reports. Developed an AI clinical assistant for natural language patient history lookup, and built an automated multi-step agentic intake routing workflow with real-time video consultation support.",
    keyDecisions:
      "Structured domain boundaries with Spring Boot microservices, implemented granular role-based security, optimized relational queries for rapid clinical data retrieval, and used LangChain RAG pipelines for contextual clinical search.",
    result:
      "Streamlined provider workflows, cut intake administrative delays by ~40%, and reduced clinical record search latency from minutes to under 500ms.",
    architectureNotes:
      "Architecture: [Client UI] ➔ [API Gateway] ➔ [Spring Boot EHR Services] ➔ [PostgreSQL / Redis] ➔ [LangChain RAG Assistant]",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "LangChain",
      "RAG",
      "PostgreSQL",
      "Redis",
      "Angular",
      "RESTful APIs",
      "Docker",
    ],
    image: "/images/medhost.jpg",
    link: "https://www.medhost.com/ehr/",
  },
  {
    title: "Smart Business Ledger App",
    category: "FinTech · Cloud Business & Ledger Management",
    badge: "Client work, source confidential",
    problem:
      "Small and medium business owners required an integrated accounting platform for automated invoicing, QR payment reconciliation, and instant financial querying without navigating complex accounting menus.",
    whatIBuilt:
      "Developed cloud ledger services featuring automated invoice generation/dispatch (via Email & WhatsApp), dynamic QR payments, payment reminder automation, and a conversational AI financial assistant (LangChain + RAG) for natural language cash-flow querying and expense categorization.",
    keyDecisions:
      "Utilized Spring Security with stateless JWT for strict tenant separation, structured transactional ACID guarantees for financial ledger operations in PostgreSQL, and implemented Redis caching for real-time ledger balance calculations.",
    result:
      "Automated over 90% of recurring invoice deliveries, reduced manual bookkeeping overhead by 60%, and accelerated invoice payment cycles.",
    architectureNotes:
      "Architecture: [Web/Mobile Client] ➔ [Spring Boot API Services] ➔ [PostgreSQL Ledger + Redis Cache] ➔ [LangChain Financial RAG]",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "LangChain",
      "RAG",
      "PostgreSQL",
      "Redis",
      "RESTful APIs",
      "Docker",
    ],
    image: "/images/smego.webp",
    link: "https://github.com/shaikh-athar",
  },
  {
    title: "AutoDialer & Call Management System",
    category: "Connsol (Group Takey) · Telecom & Call Center Platform",
    badge: "Client work, source confidential",
    problem:
      "High-volume outbound call centers faced severe agent idle times with manual dialing, fragmented IVR menus, and a lack of live supervisor visibility across concurrent calls.",
    whatIBuilt:
      "Built a complete telecommunications backend featuring automated outbound predictive dialing, answering-machine detection, intelligent inbound IVR call routing, time-zone-aware scheduling, and real-time live supervisor monitoring dashboards.",
    keyDecisions:
      "Designed asynchronous worker pools with Python and FastAPI, used RabbitMQ for robust message queues and distributed dial scheduling, and engineered real-time status streaming to agent dashboards.",
    result:
      "Boosted live agent utilization by 3.5x, sustained 1,000+ concurrent SIP channels with sub-second IVR routing transitions, and eliminated manual dialing downtime.",
    architectureNotes:
      "Architecture: [Telephony SIP Gateway] ➔ [FastAPI Async Workers] ➔ [RabbitMQ Queue] ➔ [PostgreSQL] ➔ [Live Agent React Dashboard]",
    skills: [
      "Python",
      "FastAPI",
      "RabbitMQ",
      "PostgreSQL",
      "Microservices",
      "Distributed Systems",
      "React",
      "Event-Driven Architecture",
    ],
    image: "/images/connsol.png",
    link: "https://connsol.grouptakey.com/",
  },
  {
    title: "Serveunity — Where Help Meets Need",
    category: "Self-Conceived · Community Aid & Donation Coordination Platform",
    badge: "Open Platform · Full Stack & AI",
    problem:
      "A growing gap exists between people willing to donate and those in urgent need of goods/services, with traditional charity channels suffering from lack of verification, proximity mismatches, and slow fulfillment.",
    whatIBuilt:
      "Architected and built an end-to-end community donation coordination platform connecting donors, verified NGOs, and beneficiaries. People post structured requests for food, healthcare, education, clothing, and financial aid, while verified NGOs serve as trusted intermediaries to validate authenticity and manage last-mile fulfillment.",
    keyDecisions:
      "Designed asynchronous microservices with Python and FastAPI, used PostgreSQL with Redis caching for geographic proximity querying, and integrated Apache Kafka for real-time donation dispatch and ELK stack for observability.",
    result:
      "Achieved sub-100ms proximity query latencies, streamlined donor-to-NGO verification workflows, and ensured 100% auditable aid allocation.",
    architectureNotes:
      "Architecture: [Angular Client] ➔ [FastAPI Asynchronous Gateway] ➔ [PostgreSQL / Redis] ➔ [Apache Kafka / ELK]",
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "Elastic Stack (ELK)",
      "AWS",
      "Angular",
      "System Design",
      "LLM Applications",
    ],
    image: "/images/Serveunity.png",
    link: "https://serve-unity.vercel.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const toggleExpand = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => {
                const isExpanded = !!expandedProjects[index];

                return (
                  <div className="carousel-slide" key={index}>
                    <div className="carousel-content">
                      {/* Left Column: Title, Problem, What I Built, Decisions, Results */}
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
                          <div className="case-badge-row">
                            <span className="case-badge">{project.badge}</span>
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-title-link"
                            data-cursor="disable"
                          >
                            <h4>{project.title}</h4>
                          </a>
                          <p className="carousel-category">
                            {project.category}
                          </p>

                          <div className="case-study-grid">
                            <div className="case-item">
                              <span className="case-label">Problem:</span>
                              <p className="project-desc-text">{project.problem}</p>
                            </div>
                            <div className="case-item">
                              <span className="case-label">What I Built:</span>
                              <p className="project-desc-text">{project.whatIBuilt}</p>
                            </div>

                            {isExpanded && (
                              <>
                                <div className="case-item">
                                  <span className="case-label">Key Decisions:</span>
                                  <p className="project-desc-text">{project.keyDecisions}</p>
                                </div>
                                <div className="case-item">
                                  <span className="case-label">Result:</span>
                                  <p className="project-desc-text case-result-text">{project.result}</p>
                                </div>
                              </>
                            )}
                          </div>

                          <button
                            className="project-toggle-btn"
                            onClick={() => toggleExpand(index)}
                            data-cursor="disable"
                            type="button"
                          >
                            {isExpanded ? "Show overview only" : "View full case study details"}
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Image Preview + Architecture + Tech Stack Tags */}
                      <div className="carousel-media-column">
                        <div className="carousel-image-wrapper">
                          <WorkImage
                            image={project.image}
                            alt={project.title}
                            link={project.link}
                          />
                        </div>

                        <div className="carousel-media-bottom">
                          {isExpanded && project.architectureNotes && (
                            <div className="case-item case-arch-item">
                              <span className="case-label">System Architecture:</span>
                              <code className="case-arch-box">{project.architectureNotes}</code>
                            </div>
                          )}

                          <div className="carousel-tools">
                            <span className="tools-label">Technologies &amp; Architecture</span>
                            <div className="project-skills-flex">
                              {project.skills.map((skill, sIdx) => (
                                <span className="project-skill-tag" key={sIdx}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
