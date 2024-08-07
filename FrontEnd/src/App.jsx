import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Hero';
import Gallery from './Components/Gallery';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Blog from './Components/blog';
import GalleryPage from './Components/Gallery/GalleryPage.jsx';
import PrintPage from './Components/Gallery/PrintPage.jsx';
import Prints from './Components/Prints';
import SignIn from './Components/SignIn.jsx';
import Signup from './Components/Signup.jsx';
import WelcomePage from './Components/WelcomePage.jsx';



function App() {
  // Get the current location using useLocation
  const location = useLocation();

  // Define an array of paths where the footer should be hidden
  const pathsToHideFooter = ['/ImgUploader'];

  // Check if the current location is in the pathsToHideFooter array
  const showFooter = !pathsToHideFooter.includes(location.pathname);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/prints" element={<Prints />} />
        <Route path="/WelcomePage" element={<WelcomePage />} />
        <Route path="/gallery/:categoryName" element={<GalleryPage />} />
        <Route path="/prints/:printName" element={<PrintPage />} />
      </Routes>

      
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
