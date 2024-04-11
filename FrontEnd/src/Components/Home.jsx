import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Home1 from '../Assets/Desktop/Home_Desert.jpg';
import Home2 from '../Assets/Desktop/Home2.jpg';
import Home3 from '../Assets/Desktop/Home3.jpg';
import Home4 from '../Assets/Desktop/Home4.webp';
import mobile1 from '../Assets/Mobile/mobile.webp';
import mobile2 from '../Assets/Mobile/mobile2.jpg';
import mobile3 from '../Assets/Mobile/mobile3.jpg';
import mobile4 from '../Assets/Mobile/mobile4.jpg';
import mobile5 from '../Assets/Mobile/mobile5.webp';
import mobile6 from '../Assets/Mobile/mobile6.jpg';

const imagesMobile = [mobile6, mobile2, mobile3, mobile4, mobile5, mobile1];
const imagesDesktop = [Home1, Home2, Home3, Home4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false); 
  const isMobile = window.innerWidth <= 640; 

  useEffect(() => {
    const images = isMobile ? imagesMobile : imagesDesktop;
    const interval = setInterval(() => {
      setIsRotating(true); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsRotating(false); 
      }, 500); 
    }, 3000); 

    return () => clearInterval(interval);
  }, [isMobile]);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesMobile.length) % imagesMobile.length);
  };

  const goToNextSlide = () => {
    setIsRotating(true); 
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesMobile.length);
      setIsRotating(false); 
    }, 1000); 
  };

  const imageStyle = {
    filter: isRotating ? 'blur(5px)' : 'none',
  };

  return (
    <div id='home' className=' overflow-hidden'>
      <img
        src={isMobile ? imagesMobile[currentImageIndex] : imagesDesktop[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className={`w-full h-screen object-cover ${isRotating ? 'animate-pulse' : ''}`}
        style={imageStyle} 
      />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={goToPreviousSlide}
      >
        <HiChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={goToNextSlide}
      >
        <HiChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Home;
