import React from "react";
import "../styles/contact.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div id="contact-body">
        <h1 id="thanks">Thanks for checking out my website!</h1>
        <h3>You can reach me at these following links:</h3>
        <div class="contact-links">
          <a
            href="https://github.com/danadaners"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/danazhang454
            "
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:danadaners@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <Link to="hero" spy={true} smooth={true}>
          <button>Scroll to Top</button>
        </Link>
      </div>
    </div>
  );
};
//parallax envelope graphic

export default Contact;
