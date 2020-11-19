import React from 'react';
import "./contact.css"
import {Link} from 'react-scroll'

const Contact = () => {

    return(
      <div className="contact-wrapper">
        <h1>Contact me</h1>
        <Link  to="hero" spy={true} smooth={true}>Scroll to Top</Link>
      </div>
    )
  }
//parallax envelope graphic

export default Contact
