import React, { useEffect } from "react";
import {Link} from 'react-scroll'
import "./navbar.css";


const Navbar = () => {

const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (

    <div>

      <header className={navbarClasses.join(" ")}>
        <div className="logo">
        <Link to="hero" spy={true} smooth={true}> <img src="https://cdn1.iconfinder.com/data/icons/curious-shop-1/80/curiosshop-02-512.png"></img></Link>
        </div>
        <nav className="navigation">
        <Link  to="about" spy={true} smooth={true} className="navlink">About</Link>
        <Link  to="projects" spy={true} smooth={true} className="navlink">Projects</Link>
        <Link  to="contact" spy={true} smooth={true} className="navlink">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
