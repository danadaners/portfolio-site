import React from "react";
import "../styles/contact.css";
import { Link } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

/*
TODO: optimize contact form sizing for larger screens
TODO: fade in animation for form

*/

class Contact extends React.Component {
  constructor(){
    super()
    this.state ={
      show: false,
    }
    this.toggleForm = this.toggleForm.bind(this)
  }
  toggleForm(){
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="contact-wrapper">
        <h1>Contact Me</h1>
        <div id="contact-body">
          <h2>You can reach me at these links:</h2>
          <div className="contact-links">
            <a
              href="https://github.com/danadaners"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/danazhang454
            "
              rel="noreferrer"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:danadaners@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <button onClick={this.toggleForm} id="showform">{this.state.show ? "Hide contact form" : "Show contact form"}</button>

          {this.state.show ? <div className="contactform-wrap">
            <ContactForm />
          </div> : null}

          <Link to="hero" spy={true} smooth={true}>
            Scroll to Top
          </Link>
        </div>
      </div>
    );
  }
}
//parallax envelope graphic

export default Contact;
