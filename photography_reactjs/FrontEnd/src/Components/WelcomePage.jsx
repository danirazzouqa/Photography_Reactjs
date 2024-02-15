import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";
import NavLinksBar from './NavLinksBar';

const WelcomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthContext();
  
  useEffect(() => {
    console.log(location.state); // This will log the state passed to the WelcomePage

    // Rest of your existing useEffect code
    const timer = setTimeout(() => {
      navigate('/gallery'); // Redirect to the gallery page
    }, 4000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div>
      <NavLinksBar />
    
    <div className="welcome-page w-full h-[600px] mx-auto text-center justify-center pt-20">
      
      <h1 className='text-3xl font-bold'>Welcome, <span className='text-2xl text-blue-700'>{user?.username}</span>!</h1>
      <p>Redirecting to the gallery...</p>
    </div>
    </div>
  );
};

export default WelcomePage;
