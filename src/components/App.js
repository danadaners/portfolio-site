import React from 'react'

import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Hero from './Hero';
import Sidebar from './Sidebar'

const App = () => {
  return (
    <div>
      <Navbar/>
    <div className="site-content">
      <div id="hero">
      <Hero/>
      </div>
      <div id="about">
      <AboutMe/>
      </div>
      <div id="projects">
      <Projects/>
      </div>
      <div id="contact">
      <Contact/>
      </div>
      </div>
      <div className="site-body-wrap">
      <Sidebar/>
      </div>
      </div>
  );
}

export default App;
