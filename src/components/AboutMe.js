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
          I'm a software engineer in Boston.

          <h4>I'm a full stack developer with a focus on the front end.</h4>
          <h4>Here are some of the technologies I use:</h4>
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



    </div>
  );
};

export default AboutMe;
