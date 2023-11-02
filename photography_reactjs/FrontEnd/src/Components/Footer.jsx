import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import Logo from '../Assets/Logo2.png';

const Footer = () => {
  return (
    <div className='bg-black  '>
    <div className='max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cols-3  text-gray-300'>
      <div>
      <img src={Logo} alt="logo" style={{ width: '50px' }} />
        
      <div className="flex items-center mt-6 ml-8 space-x-2">
  <a href="https://www.linkedin.com/in/karamrazzoqa/" target="_blank" rel="noreferrer">
    <FaLinkedin size={30} /> 
  </a>
  <div className="ml-2">/karamrazzoqa</div>
</div>

<div className="flex items-center ml-8 mt-2 space-x-2">
  <a href="https://www.facebook.com/karamFFS" target="_blank" rel="noreferrer">
    <FaFacebookSquare size={30} />
  </a>
  <div className="ml-2">/karamFFS</div>
</div>

<div className="flex items-center ml-8 mt-2 space-x-2">
  <a href="https://instagram.com/karam_razzouq?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">
    <FaInstagram size={30} />
  </a>
  <div className="ml-2">/karam_razzouq</div>
</div>
      </div>
      <div className='lg:col-span-2 flex space-x-4 mt-6'>
    <div>
    <h6 className=' ml-4 font-medium font-serif text-gray-400'>Shop</h6>
        <ul>
            <li className='py-2 text-sm'>Prints</li> 
            <li className='py-2 text-sm'>Sessions</li>
        </ul>
    </div>
   
    <div>
        <h6 className='ml-4 font-medium font-serif text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='ml-4 font-medium font-serif text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Privacy Policy</li>
            <li className='py-2 text-sm'>Terms of Service</li>
            <li className='py-2 text-sm'>Refund Policy</li>
            <li className='py-2 text-sm'>Shipping Policy</li>
        </ul>
    </div>
      </div>
      <p className='m-auto mt-12'>&copy; 2023 Karam Photography. All rights reserved.</p>
    </div>
         
    </div>
   
  );
};

export default Footer;
