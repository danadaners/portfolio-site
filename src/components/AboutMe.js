import React from "react";
import "../styles/aboutme.css";
import me from "./assets/me.JPG";
import LazyLoad from "react-lazyload";

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div id="about-body">
        <h1>I love creating functional & attractive projects. </h1>
        <LazyLoad>
          <img src={me} alt="me" id="my-photo" />
        </LazyLoad>
        <h2>The technologies I mainly use:</h2>
      </div>
    </div>
  );
};

export default AboutMe;
