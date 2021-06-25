import React from "react";
import "../styles/hero.css";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-body">

    <h3 className="greeting">Hi, my name is</h3>
      <h1>Dana Zhang</h1>
        <h3 className="greeting">I'm a Software Engineer.</h3>

      </div>
      {/* <button className="contact">Get in Touch</button> */}

      <div className="scroll-arrow">
        <Link to="projects" smooth={true}>
          <BsChevronDown />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
