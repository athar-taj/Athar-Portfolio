import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/athar-shaikh-b9035931b/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Athar Shaikh
              </a>
            </p>
            <p>
              <a
                href="mailto:contact.athar.taj@gmail.com"
                data-cursor="disable"
              >
                Email — contact.athar.taj@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919875192829"
                data-cursor="disable"
              >
                Phone — +91 987 519 2829
              </a>
            </p>
            <p data-cursor="disable">Ahmedabad, Gujarat (380021)</p>
            <h4>Education</h4>
            <p>B.Tech, Information Technology — LJIET, Ahmedabad</p>
            <p>Diploma in Information Technology — Silver Oak University, Ahmedabad</p>
            <h4>Certifications</h4>
            <p>• Building Generative AI-Powered Applications with Python</p>
            <p>• AWS Cloud Technical Essentials</p>
            <p>• Exploratory Data Analysis for Machine Learning</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/athar-taj"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/athar-shaikh-b9035931b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Athar Shaikh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
