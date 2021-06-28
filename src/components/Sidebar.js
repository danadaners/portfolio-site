import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineMailOpen } from "react-icons/hi";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div id="side-wrap">
        <a
          href="https://github.com/danadaners"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub />
        </a>
        <div id="line"></div>
        <a
          href="https://www.linkedin.com/in/danazhang454"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialLinkedinCircular id="linkedin" />
        </a>
        <div id="line"></div>
        <a href="mailto:danadaners@gmail.com" target="_blank" rel="noreferrer">
          <HiOutlineMailOpen />
        </a>
        <div id="longline"></div>
      </div>
    </div>
  );
};

export default Sidebar;
