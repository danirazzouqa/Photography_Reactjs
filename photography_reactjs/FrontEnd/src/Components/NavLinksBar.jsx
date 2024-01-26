import React, { useState } from 'react';
import Logo from '../Assets/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";

const handleNavLinkClick = (event, sectionId) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const DesktopNav = () => {
  const location = useLocation();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const isLandingPage = location.pathname === '/';

  const handleLogoutClick = () => logout();

  return (
    <ul className='hidden md:flex px-8 font-bold'>
      {isLandingPage ? (
        <>
          <li><a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/prints">Prints</a></li>
          <li><a href="/contact">Contact</a></li>
        </>
      ) : (
        <>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/prints">Prints</a></li>
          <li><a href="/contact">Contact</a></li>
        </>
      )}
      {user ? (
        <div>
          <span className='text-gray-500'>{user.username}, </span>
          <button className='bg-slate-600 rounded-lg text-white font-serif px-1' onClick={handleLogoutClick}>Log Out</button>
        </div>
      ) : (
        <li className='bg-slate-600 rounded-lg text-white font-serif'>
          <a href="/SignIn">Sign in</a>
        </li>
      )}
    </ul>
  );
};

const MobileNav = ({ nav }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <ul className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-300 ${nav ? '' : 'hidden'}`}>
      {isLandingPage ? (
        <>
          <li><a href="#hero" onClick={(e) => handleNavLinkClick(e, 'hero')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/prints">Prints</a></li>
          <li><a href="/contact">Contact</a></li>
        </>
      ) : (
        <>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/prints">Prints</a></li>
          <li><a href="/contact">Contact</a></li>
        </>
      )}
    </ul>
  );
};

const NavLinksBar = () => {
  const [nav, setNav] = useState(false);
  const handleNavClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[40px] flex items-center justify-between'>
      <div className='cursor-pointer'>
        <a href="/"><img src={Logo} alt="logo" style={{ width: '50px' }} /></a>
      </div>

      <DesktopNav />

      <div onClick={handleNavClick} className='md:hidden p-4 z-10'>
        {!nav ? <FaBars /> : <FaTimes className='text-gray-100' />}
      </div>

      <MobileNav nav={nav} />
    </div>
  );
};

export default NavLinksBar;
