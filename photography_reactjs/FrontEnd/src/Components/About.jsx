import React from 'react';
import Profile from '../Assets/About.jpg';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import NavLinksBar from './NavLinksBar';

const About = () => {
  return (
    <div id="about" className="w-full h-full bg-slate-100">
      <NavLinksBar />
      <div className="w-full h-full">
        <div className="w-full h-[100px]">
        </div>
        <div className="h-full grid grid-cols-1 md:grid-cols-2 md:flex md:mt-32 ml-4 md:ml-10 lg:justify-center items-center text-center bg-slate-100 mr-10">
          <div className="text-3xl md:text-4xl p-4 md:p-8 w-[100%] md:w-[300px] text-center md:text-left lg:justify-center items-center lg:border-r-2 lg:border-block md:border-r-2 md:border-block  ">
            <img src={Profile} alt="" style={{ borderRadius: '50%' }} />
            <p className='justify-center text-center pt-4 font-serif text-xl text-gray-500'>Connect with me</p>
            <div className="flex justify-center space-x-2 items-center m-auto mt-4">
              <a className='text-blue-500' href='https://www.linkedin.com/in/karamrazzoqa/' target="_blank" rel="noreferrer">
                <FaLinkedin size={40} />
              </a>
              <a className='text-blue-500' href='https://www.facebook.com/karamFFS' target="_blank" rel="noreferrer">
                <FaFacebook size={40} />
              </a>
              <a className='text-purple-500' href='https://instagram.com/karam_razzouq?igshid=MzRlODBiNWFlZA==' target="_blank" rel="noreferrer">
                <FaInstagram size={40} />
              </a>
            </div>
          </div>
          <div className="lg:w-[50%] p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-serif py-6 md:py-10">
              Hi, I'm Karam Razzoqa
            </h1>
            <p className="font-serif text-base md:text-lg py-4">
              I’m a freelancer traveler photographer and multi-disciplinary artist based in Jordan, Amman.
            </p>
            <p className="font-serif text-base md:text-lg py-4">
              With a passion for travel and adventure, I specialize in exploring the contrast between nature and urban, through landscape, cityscape, aerial, lifestyle, and street photography.
            </p>
            <p className="font-serif text-base md:text-lg py-4">
              I believe that photography is not just about capturing images; it's about capturing emotions, stories, and moments that last a lifetime. Our lens becomes the storyteller, turning the ordinary into extraordinary.
            </p>
          </div>
          
        </div>
        <div className='justify-center items-center border-b-2 m-auto mt-16 w-[75%]'></div>
      </div>
    </div>
  );
};

export default About;
