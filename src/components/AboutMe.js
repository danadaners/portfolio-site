import React from "react";
import "../styles/aboutme.css";
import dana from "./assets/dana.jpg";
import { FaCode} from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { ImEye } from "react-icons/im";

const AboutMe = () => {
  return (
    <div className="about">
      <h1>About Me</h1>

      <div className="intro">
        <div id="text">
          <h4>I'm a full stack developer with a focus on the front end.</h4>
         I am passionate about coding, design, and learning new technologies.
        </div>
        <img src={dana} alt="dana" id="my-photo" width='650' height='650'/>

      </div>

      <div id="interests">
        <h3>When building projects, I like to prioritize:</h3>
        <li>
          <p id="icon">
            <ImEye />
          </p>
          good UI/UX design
        </li>
        <li>
          <p id="icon">
            <GiSmartphone />
          </p>
          accessibility and responsiveness
        </li>
        <li>
          <p id="icon">
            <FaCode />
          </p>
          optimized and modular code
        </li>
      </div>

      <div id="toolset">
        <h2>
          Here's my current toolset:
        </h2>
        <div id="tools-wrapper">
          <div className="tools key">
            <h4>Front End</h4>
            <li>JavaScript(ES6+), Node.js </li>
            <li>React, Redux, Webpack, Babel </li>
            <li>CSS, SASS, Bootstrap</li>
          </div>
          <div className="tools back">
            <h4>Back End</h4>
            <li>Express</li>
            <li>Sequelize</li>
            <li>PostgresSQL</li>
            <li>Socket.io</li>
          </div>
          <div className="tools other">
            <h4>Other</h4>
            <li>Heroku, Grunt, Gulp</li>
            <li>Git, npm, Postman, Postico</li>
            <li>TDD - Mocha, Chai, Jasmine</li>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
