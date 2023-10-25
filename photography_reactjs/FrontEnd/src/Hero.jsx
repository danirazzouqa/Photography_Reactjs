import React from 'react'
import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function Hero() {
  return (
    <div name='Hero'>
      
        <Navbar />
        <Home />
        <About />
        <Projects />
      
    </div>
  );
}

export default Hero;
