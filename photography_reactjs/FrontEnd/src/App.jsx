import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Hero';
import Gallery from './Components/Gallery';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ImgUploader from './Components/ImgUploader';
import Blog from './Components/blog';
import GalleryPage from './Components/Gallery/GalleryPage.jsx';
import PrintPage from './Components/Gallery/PrintPage.jsx';
import BlogUploader from './Components/BlogUploader';
import Prints from './Components/Prints';


function App() {
  // Get the current location using useLocation
  const location = useLocation();

  // Check if the current location is not "/ImgUploader"
  const hideFooter = location.pathname === '/ImgUploader';

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/prints" element={<Prints />} />
        <Route path="/ImgUploader" element={<ImgUploader />} />
        <Route path="/BlogUploader" element={<BlogUploader />} />
        <Route path="/gallery/:categoryName" element={<GalleryPage />} />
        <Route path="/prints/:printName" element={<PrintPage />} />
      </Routes>

      {/* Conditionally render the Footer based on the hideFooter variable */}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
