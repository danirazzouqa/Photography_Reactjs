import React, { useState } from 'react';
import Logo from '../Assets/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


const DesktopNav = () => (
  <ul className='hidden md:flex px-8 font-bold '>
    <li>
      <Link to="Hero"  smooth="true" duration={500}>
        Home
      </Link>
    </li>
    <li>
      <Link to="about" smooth="true" duration={500}>
        About
      </Link>
    </li>
    <li>
      <Link to="projects" smooth="true" duration={500}>
        Projects
      </Link>
    </li>
    <li>
      <a href="/Gallery" smooth="true" duration={500}>
        Gallery 
      </a>
    </li>
    <li>
      <a href="/Prints" smooth="true" duration={500}>
        Prints 
      </a>
    </li>
    <li>
    <a href="/contact">Contact</a>
    </li>
  </ul>
);

const MobileNav = ({ nav }) => (
  <ul className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-300 ${nav ? '' : 'hidden'}`}>
    <li>Home</li>
    <li>Skills</li>
    <li>Projects</li>
    <li>Contact</li>
  </ul>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[40px] flex items-center justify-between'>
      <div>
        <img className='cursor-pointer' src={Logo} alt="logo" style={{ width: '50px' }} />
      </div>

      <DesktopNav />

      <div onClick={handleClick} className='md:hidden p-4 z-10 '>
        {!nav ? <FaBars /> : <FaTimes className='text-gray-100' />}
      </div>

      <MobileNav nav={nav} />
    </div>
  );
}

export default Navbar;
