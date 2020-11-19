import React from 'react';
import "../styles/contact.css"
import {Link} from 'react-scroll'

const Contact = () => {

    return(
      <div className="contact-wrapper">
      <div id="contact-body">
        <h1>Thanks for checking out my website.</h1>
        <h3>You can reach me at these following links:</h3>
        <Link to="hero" spy={true} smooth={true}><button>Scroll to Top</button></Link>
      </div>
      </div>
    )
  }
//parallax envelope graphic

export default Contact
