import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [prevOffset, setPrevOffset] = React.useState(0);

  const toggleScrollDirection = () => {
    let scrollY = window.scrollY;

    if (scrollY > prevOffset) {
      setScrolled(true);
    } else if (scrollY < prevOffset || scrollY === 0) {
      setScrolled(false);
    }
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollDirection);
  });
  let navbarClasses = ["navbar"];
  let navLinkClasses = ["navigation"];
  if (scrolled) {
    navbarClasses.push("scrolled");
    navLinkClasses.push("scrollnav");
  }

  return (
    <div>
      <header className={navbarClasses.join(" ")}>
        <div className="logo">
          <Link to="hero" spy={true} smooth={true}>
            {" "}
            <img src="https://cdn1.iconfinder.com/data/icons/curious-shop-1/80/curiosshop-02-512.png"></img>
          </Link>
        </div>
        <nav className={navLinkClasses.join(" ")}>
          <Link to="about" spy={true} smooth={true} className="navlink">
            About
          </Link>
          <Link to="projects" spy={true} smooth={true} className="navlink">
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} className="navlink">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
