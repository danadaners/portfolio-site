import React from "react";
import "../styles/hero.css";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";

/*
TODO: add parallax scrolling or anything that would make this less boring
TODO: add a contact me button that scrolls to bottom
TODO: fix spacing for large viewports
*/

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div id="hero-body">
        <h1 id="greeting">Hello, my name is</h1>
        <div id="name-wrap">
          <div className="name-line one"></div>
          <h1 id="name">Dana Zhang</h1>
          <div className="name-line two"></div>
        </div>
        <h3 id="subgreet">I'm a full stack developer based in Boston.</h3>
      </div>
      <div id="scroll-arrow">
        <Link to="about" smooth={true}>
          <BsChevronDown />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
