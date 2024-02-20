import React from 'react'
import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';
import NavLinksBar from './Components/NavLinksBar';

function Hero() {
  return (
    <div name='Hero'>
      
        <NavLinksBar />
        <Home />
        <About />
        <Projects />
      
    </div>
  );
}

export default Hero;
