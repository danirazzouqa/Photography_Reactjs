import React from 'react';
import NavLinksBar from './NavLinksBar';
import HomeDesert from '../Assets/NIHJT.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
  backgroundImage: `url(${HomeDesert})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-slate-100 p-4' style={containerStyle}>
      <NavLinksBar />
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold inline-block bg-gray-100/50 rounded px-4 py-2 shadow">Get in touch</h1>
        <p className="mt-4 bg-gray-100/50 rounded px-4 py-2 shadow">Submit the form below or choose another contact method.</p>
      </div>

     
      <div className="container mx-auto py-8 grid md:grid-cols-2 gap-8 items-start ">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-semibold mb-4">Direct Contact</h2>
          <div className="space-y-4">
           
            <a data-testid="email-contact" href="mailto:danirazzouqa@gmail.com?subject=Contact Inquiry" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-red-500" />
              <span className="text-xl">danirazzouqa@gmail.com</span>
            </a>
          
            <a href="https://wa.me/36204379679" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faSquareWhatsapp} className="text-3xl text-green-500" />
              <span className="text-xl">WhatsApp</span>
            </a>
            
            <a href="https://www.facebook.com/dani.george.142/" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faFacebookMessenger} className="text-3xl text-blue-500" />
              <span className="text-xl">Messenger</span>
            </a>
          </div>
        </div>

       
        <div className='w-full max-w-[600px] flex flex-col items-center bg-trsparent/90 rounded shadow p-8'>
          <form method='POST' action="https://getform.io/f/f5704890-6b1d-49bc-98f7-757e1ee9de12" className='w-full'>
              <h2 className='text-3xl font-bold mb-4'>Contact Form</h2>
              <input className='bg-gray-100/50 placeholder:text-black p-2 w-full mb-4' type="text" placeholder='Name' name='name' />
              <input className='bg-gray-100/50 placeholder:text-black p-2 w-full mb-4' type="email" placeholder='Email' name='email' />
              <textarea className='bg-gray-100/50 placeholder:text-black  p-2 w-full mb-4' name="message" rows="6" placeholder='Message'></textarea>
              <button className='bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded transition-colors' type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
