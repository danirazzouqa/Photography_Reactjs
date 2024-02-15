import React from 'react';
import NavLinksBar from './NavLinksBar';
import HomeDesert from '../Assets/NIHJT.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp , faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
  backgroundImage: `url(${HomeDesert})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen" style={containerStyle}>
      <NavLinksBar />
      <div className="text-center py-8">
        <h1 className="text-3xl">Get in touch</h1>
      </div>
      <div className="container mx-auto py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <div className="text-center shadow-lg p-4 w-full md:w-[300px] rounded-md bg-transparent/20 mb-4 text-white">
          
            <h3 className="p-2 text-2xl">Send me an Email</h3>
            <a
              className="  p-2 m-2"
              href="mailto:danirazzouqa@gmail.com.com?subject=SendMail&body=Description"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-4xl p-2 m-auto"
                icon={faEnvelope}
                fade
                style={{ color: "e13737" }}
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="text-white shadow-lg p-4 w-full md:w-[300px] rounded-md bg-transparent/20 text-center mb-4">
            <h3 className="text-2xl mx-auto">Send me on WhatsApp</h3>
            <a
              href="https://wa.me/36204379679"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-4xl p-2 m-auto"
                icon={faSquareWhatsapp}
                fade
                style={{ color: "#3dbd55" }}
              ></FontAwesomeIcon>
            </a>
            <h3 className='text-2xl mx-auto'>Call Me</h3>
            <a
          href="tel:+36204379679"
          className=" hover:underline"
          >
          +36204379679
          </a>
          </div>
          <div className="text-white shadow-lg p-4 w-full md:w-[300px] rounded-md bg-transparent/20 text-center">
            <h3 className="text-2xl mb-4">Send me on Messenger</h3>
            <a
              href="https://www.facebook.com/dani.george.142/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-4xl p-2 m-auto"
                icon={faFacebookMessenger}
                fade
                style={{ color: "#3c7cec" }}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className=" shadow-lg p-4 text-white bg-transparent/20">
            <h3 className="text-2xl mb-4">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded p-2 bg-transparent/20"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded p-2 bg-transparent/20"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="w-full border rounded p-2 bg-transparent/20"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white py-2 px-4 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
