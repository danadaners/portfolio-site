import React from "react";
import "../styles/sidebar.css";

import { TiSocialLinkedinCircular } from "react-icons/ti";

import { VscGithub } from "react-icons/vsc";
import { HiOutlineMailOpen } from "react-icons/hi";

const Sidebar = React.memo(() => {
  return (
    <div className="sidebar">
      <div id="side-wrap">
        <div id="longline"></div>
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
      </div>
    </div>
  );
});

export default Sidebar;
