import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "../Assets/Logo2.png";
import FooterPic from "../Assets/Footer.jpg";

const Footer = () => {
  return (
    <footer className='bg-black py-12'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center '>
         
          <div className="lg:border-r lg-ml-8  border-white">
            <h2 className='text-white text-lg font-semibold mb-4 '>Follow Me</h2>
            
            <img className=" mx-auto pb-4" src={Logo} alt='logo' style={{ width: "50px" }} />
            <img
              src={FooterPic}
              alt='Profile'
              className='w-[400px] lg:w-[500px] h-[300px] rounded-md mb-4 mx-auto object-fit'
            />
           
            <div className=' flex items-center justify-center mt-6  gap-12 text-white'>
              <a
                href='https://www.linkedin.com/in/karamrazzoqa/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href='https://www.facebook.com/karamFFS'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href='https://instagram.com/karam_razzouq?igshid=MzRlODBiNWFlZA=='
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>

          
          <div className="my-auto">
            <h2 className='text-white text-lg font-semibold mb-4'>
              Ready to Book?
            </h2>
            <p className='text-gray-300 mb-8 text-md text-center mx-2'>
             I believe that every couple deserves my very best. Because of that,
             I only take on a limited number of sessions per week.
              Make sure to reach out to book your spot now!
            </p>
            <a href="/contact"  className='bg-gray-500 text-white px-6 py-4 rounded hover:bg-gray-600'>
              Contact Me
            </a>
          </div>
        </div>
        
      </div>
      <div className="mx-auto text-center">
      <p className=' mt-12 text-white '>&copy; 2023 Karam Photography. All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;
