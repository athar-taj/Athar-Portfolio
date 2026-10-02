import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Direct Reach</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/athar-shaikh-b9035931b/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — in/athar-shaikh-b9035931b
              </a>
            </p>
            <p>
              <a
                href="mailto:contact.athar.shaikh@gmail.com"
                data-cursor="disable"
              >
                Email — contact.athar.shaikh@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919875192829"
                data-cursor="disable"
              >
                Phone — +91 98751 92829
              </a>
            </p>
            <p data-cursor="disable">Ahmedabad, Gujarat, India (IST)</p>

            <h4>Education</h4>
            <p>B.Tech in Information Technology — LJ Institute of Engineering and Technology (LJIET), Ahmedabad</p>
          </div>
          <div className="contact-box">
            <h4>Profiles &amp; Articles</h4>
            <a
              href="https://github.com/shaikh-athar"
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
            <a
              href="https://medium.com/@contact.athar.shaikh"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Medium <MdArrowOutward />
            </a>
            <a
              href="/ATHAR.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed &amp; Built <br /> by <span>Athar Shaikh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 · Software Developer
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
