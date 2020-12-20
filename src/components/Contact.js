import React from "react";
import "../styles/contact.css";
import { Link } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      formOpen: false,
    };
    this.toggleContactForm = this.toggleContactForm.bind(this);
  }

  toggleContactForm() {
    this.setState({
      formOpen: !this.state.formOpen,
    });
  }

  render() {
    return (
      <div className="contact-wrapper">
        <div id="contact-body">
          <h2>You can reach me at these following links...</h2>
          <div className="contact-links">
            <a
              href="https://github.com/danadaners"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <FaGithub/>
            </a>
            <a
              href="https://www.linkedin.com/in/danazhang454
            "
              rel="noreferrer"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin/>
            </a>
            <a
              href="mailto:danadaners@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <FaEnvelope/>
            </a>
          </div>

          <button onClick={this.toggleContactForm}>Or Contact me Here!</button>
          {this.state.formOpen ? "Hello" : null}

          <Link to="hero" spy={true} smooth={true}>
            <button>Scroll to Top</button>
          </Link>
        </div>
      </div>
    );
  }
}
//parallax envelope graphic

export default Contact;
