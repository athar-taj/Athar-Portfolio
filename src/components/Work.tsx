import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Project {
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  initialSkills: string[];
  collapsedSkills: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "AutoDialer & Call Management System",
    category: "Connsol (Group Takey) · Telecom & Call Center Platform",
    shortDescription:
      "A complete call management system featuring automated outbound dialing, intelligent inbound IVR routing, and live agent supervision dashboards.",
    fullDescription:
      "Built a call management system for Group Takey that handles automatic outbound calling, scheduling, and inbound call answering with smart menu options and call routing. Includes real-time dashboards for monitoring call center agents, full call recording, answering-machine detection, and time-zone-aware call scheduling. Added reporting dashboards with CSV export for analyzing team performance.",
    initialSkills: ["Python", "React", "PostgreSQL", "RabbitMQ"],
    collapsedSkills: [
      "Border Gateway Protocol (BGP)",
      "CI/CD",
      "Networking",
      "AWS",
      "React.js",
      "Agile & Waterfall Methodologies",
      "System Architecture",
      "Analytical Thinking",
      "Back-End Web Development",
      "Unit Testing",
      "Event-Driven Architecture",
      "Scenario Analysis",
      "Integration Testing",
    ],
    image: "/images/connsol.png",
    link: "https://connsol.grouptakey.com/",
  },
  {
    title: "Healthcare Management App",
    category: "MEDHOST · Enterprise EHR & Clinical Intelligence",
    shortDescription:
      "Enterprise healthcare microservices platform powering electronic health records, provider-patient communications, and agentic AI intake automation.",
    fullDescription:
      "Enterprise healthcare management platform built on RESTful microservices to manage provider profiles, appointments, records, prescriptions, and medical reports, with EHR support for medical record management. Built a clinical information system with an AI assistant that lets providers search patient history, prescriptions, and reports using natural language. Created an agentic AI process to automate multi-step patient intake — form filling and intelligent routing to triage paths based on patient responses. Added a chatbot for provider-patient communication (notifications, scheduling, operational questions), secure video conferencing, and multi-channel event notifications.",
    initialSkills: ["Spring Boot", "REST APIs", "Angular", "Distributed Systems"],
    collapsedSkills: [
      "Optimizing Performance",
      "Electronic Health Records (EHR)",
      "API Development",
      "CI/CD",
      "Production Debugging",
      "Slack",
      "LLM Applications",
      "Query Optimization",
      "Back-End Web Development",
      "Root Cause Analysis",
      "Unit Testing",
      "IBM Db2",
      "Java",
      "Scenario Analysis",
      "Performance Optimization",
      "Integration Testing",
    ],
    image: "/images/medhost.jpg",
    link: "https://www.medhost.com/ehr/",
  },
  {
    title: "Serveunity — Where Help Meets Need",
    category: "Personal Project · Community Aid & Donation Coordination",
    shortDescription:
      "A real-time donation platform connecting people in need with donors and verified NGOs based on proximity, urgency, and verified requests.",
    fullDescription:
      "Self-conceived platform bridging the gap between people willing to help and people who need help, through a donation process for goods and services. People and organizations post requests for food, healthcare, education, clothing, or financial support; verified NGOs and community organizations act as trusted intermediaries who assess and help fulfill each request. Designed around proximity, time value, trust, and relevance, so resources go to genuine need.",
    initialSkills: ["Python", "FastAPI", "Software Solution Architecture", "Software Observability"],
    collapsedSkills: [
      "Software Testing",
      "API Development",
      "Software Troubleshooting",
      "PostgreSQL",
      "Object-oriented Languages",
      "Application Monitoring",
      "LLM Applications",
      "Asynchronous work",
      "Back-End Web Development",
      "Relational Databases",
      "Elastic Stack (ELK)",
      "Unit Testing",
      "Angular",
      "Scenario Analysis",
      "Redis",
      "Apache Kafka",
      "Systems Design",
    ],
    image: "/images/Serveunity.png",
    link: "https://serve-unity.vercel.app/",
  },
  {
    title: "Smart Business Ledger App",
    category: "FinTech · Cloud Business & Ledger Management",
    shortDescription:
      "Cloud-based ledger system featuring automated invoicing, QR payments, and natural language AI financial querying with RAG.",
    fullDescription:
      "Cloud-based business management system for small businesses. Built RESTful APIs for invoice generation and delivery via email and WhatsApp, with QR code payment options. Added an AI chatbot (RAG + LangChain) so businesses can query their financial and transaction data in natural language, plus LLM-generated cash flow summaries and categorized spending analysis. Supports partial/full invoice payments, recurring payments, and late-payment reminders, and converts between quotes, credit notes, purchase orders, and delivery notes. Business owners can connect bank accounts, track income/expenses, export Excel/PDF reports, and attach receipts for verification. Role management built with Spring Security and JWT for employee-level access control.",
    initialSkills: ["Spring Boot", "Angular", "REST APIs", "Distributed Systems"],
    collapsedSkills: [
      "Scalable Architecture",
      "Jakarta Persistence",
      "Code Review",
      "Prompt Engineering",
      "API Development",
      "Retrieval-Augmented Generation (RAG)",
      "PostgreSQL",
      "Application Monitoring",
      "LLM Applications",
      "Back-End Web Development",
      "LangChain",
      "Event-Driven Architecture",
      "Scenario Analysis",
      "Redis",
      "Spring Security",
      "Integration Testing",
    ],
    image: "/images/smego.webp",
    link: "https://github.com/athar-taj",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});

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
          My <span>Work</span>
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
                const displayedSkills = isExpanded
                  ? [...project.initialSkills, ...project.collapsedSkills]
                  : project.initialSkills;

                return (
                  <div className="carousel-slide" key={index}>
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
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

                          <div className="project-description-box">
                            <p className="project-desc-text">
                              {isExpanded
                                ? project.fullDescription
                                : project.shortDescription}
                            </p>
                          </div>

                          <div className="carousel-tools">
                            <span className="tools-label">Skills &amp; Tech</span>
                            <div className="project-skills-flex">
                              {displayedSkills.map((skill, sIdx) => (
                                <span className="project-skill-tag" key={sIdx}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button
                            className="project-toggle-btn"
                            onClick={() => toggleExpand(index)}
                            data-cursor="disable"
                            type="button"
                          >
                            {isExpanded ? "Show less" : "Show more"}
                          </button>
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          link={project.link}
                        />
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
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
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
