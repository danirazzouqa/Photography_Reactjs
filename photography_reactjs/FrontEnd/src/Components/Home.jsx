import React, { useEffect, useState } from 'react';
import HomeDesert from '../Assets/Home_Desert.jpg';

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${HomeDesert})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textToDisplay = "Turning Memories into Timeless Art!";
    const timer = setInterval(() => {
      if (index < textToDisplay.length) {
        setText(textToDisplay.substring(0, index + 1));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust the timing as needed
    return () => {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <div  className='w-full h-screen' style={containerStyle}>
      <div className='mx-auto flex items-center justify-center w-full h-full '>
        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-orange-300'>
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Home;
