import React from "react";
import "../styles/aboutme.css";
import me from "./assets/dana.jpg";
import { FaPalette, FaGamepad, FaCarrot } from "react-icons/fa";
/*
TODO: fix sizing of elements for larger screens
TODO: add scroll animations/parallax
TODO: update about me intro so it's not so generic
*/
const AboutMe = () => {
  return (
    <div className="about">
      <h1>About Me</h1>

      <div className="intro">
        <div id="text">
          <h4>I'm a full stack developer with a focus on the front end.</h4>
  I'm passionate about coding and design. I love what I do because full stack development is the perfect combination of both. I enjoy writing optimized, modular, and well-documented code.
        </div>
        <img src={me} alt="me" id="my-photo" width='650' height='650'/>

      </div>

      <div id="interests">
        <h3>When I'm not coding, I'm probably..</h3>
        <li>
          <p id="icon">
            <FaPalette />
          </p>
          drawing, painting, or animating
        </li>
        <li>
          <p id="icon">
            <FaGamepad />
          </p>
          playing video games
        </li>
        <li>
          <p id="icon">
            <FaCarrot />
          </p>
          trying new recipes
        </li>
      </div>

      <div id="toolset">
        <h2>
          Here is my current toolset:
        </h2>
        <div id="tools-wrapper">
          <div className="tools key">
            <h4>Front End</h4>
            <li>JavaScript(ES6+), Node.js, npm </li>
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
            <li>Heroku, Netlify, Firebase </li>
            <li>Git, Postman, Postico</li>
            <li>TDD - Mocha, Chai, Jasmine</li>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
