import React, { useState } from 'react';
import Logo from '../Assets/Logo.png';
import { FaBars, FaTimes,  } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[40px] flex items-center justify-between'>
      <div>
        <img src={Logo} alt="logo" style={{ width: '50px' }} />
      </div>

      <ul className='hidden md:flex px-8 font-bold '>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
          Gallery 
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden p-4 z-10 '>
        {!nav ? <FaBars /> : <FaTimes className='text-gray-100' />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-300'}>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      
    </div>
  );
}

export default Navbar;