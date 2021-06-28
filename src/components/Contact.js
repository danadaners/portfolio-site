import React from "react";
import "../styles/contact.css";
import { Link } from "react-scroll";
import ContactForm from "./ContactForm";

/*
TODO: optimize contact form sizing for larger screens
*/

const Contact = () => {
    return (
      <div className="contact-wrapper">
        <h1>Wanna know more?</h1>
        <div id="contact-body">

          <div className="contactform-wrap">
            <ContactForm />
          </div>

          <Link to="hero" spy={true} smooth={true}>
            Scroll to Top
          </Link>
        </div>
      </div>
    );
}

export default Contact;
