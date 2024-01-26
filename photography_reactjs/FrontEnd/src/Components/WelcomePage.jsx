import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";

const WelcomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuthContext();
  
  useEffect(() => {
    console.log(location.state); // This will log the state passed to the WelcomePage

    // Rest of your existing useEffect code
    const timer = setTimeout(() => {
      navigate('/gallery'); // Redirect to the gallery page
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div className="welcome-page">
      <h1>Welcome, {user.username}!</h1>
      <p>Redirecting to the gallery...</p>
    </div>
  );
};

export default WelcomePage 
