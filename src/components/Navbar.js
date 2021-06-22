import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
// import logo from "./assets/logo.png";

const Navbar = React.memo(() => {
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
          {/* <Link to="hero" smooth={true}>
            <img src={logo} alt="logo" id="logo" />
          </Link> */}
        </div>
        <nav className={navLinkClasses.join(" ")}>
          <Link to="about" smooth={true} className="navlink">
            About
          </Link>
          <Link to="projects" smooth={true} className="navlink">
            Projects
          </Link>
          <Link to="contact" smooth={true} className="navlink">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
});

export default Navbar;
