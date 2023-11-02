import React from 'react';
import Project1 from '../Assets/Project1.jpg';
import Project2 from '../Assets/Project2.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import NavLinksBar from './NavLinksBar';



function Projects() {
  

  return (
    <div name="projects" className="w-full h-full bg-slate-100">
      <NavLinksBar />
      <div className="w-full h-full">
        <div className="w-full h-[100px]"></div>
        <div className="h-full grid grid-cols-1 md:grid-cols-2 md:flex md:mt-10 ml-4 md:ml-10 lg:justify-center items-center bg-slate-100 mr-10 ">
          <div className=''>
            <img
              className="lg:w-[600px] lg:h-[750px] md:w-[400px] md:h-[550px] w-[350px] h-[450px] object-cover shadow-lg shadow-black hover:scale-105 duration-500  filter brightness-90"
              src={Project1}
              alt=""
            />
          </div>
          <div className="lg:w-[50%] p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-serif py-6 md:py-10">
              Landscape photography Gallery
            </h1>
            <p className="font-serif text-base md:text-lg py-4">
              Photography from all over the world!
            </p>
            <a href='/Gallery'  className="group shadow-lg w-[200px] shadow-black px-6 py-3 my-2 flex items-center bg-gray-300 hover:border-gray-300">
              View All Gallery
              <span className="group-hover:scale-125 group-hover-text-blue-400 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </a>
          </div>
        </div>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 md:flex md:mt-10 ml-4 md:ml-10 lg:justify-center items-center bg-slate-100 mr-10 '>
          <div className="lg:w-[30%]">
            <h1 className="text-3xl md:text-4xl font-serif py-6 md:py-10">
              Blog & Stories
            </h1>
            <p className="font-serif text-base md:text-lg py-4">
              "Every place holds a story, whispered through its very essence. It's in the rustling leaves, the cobblestone streets, and the starry nights. These stories, hidden yet waiting to be discovered, weave the rich tapestry of our world."
            </p>
            <button className="group shadow-lg shadow-black px-6 py-3 my-2 flex items-center bg-gray-300 hover:border-gray-300">
              View Blog
              <span className="group-hover:scale-125 group-hover-text-blue-400 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
          <div className="lg:w-[50%] ml-8 p-4 md:p-8">
            <img
              className="lg:w-[600px] lg:h-[750px] md:w-[400px] md:h-[550px] w-[350px] h-[450px] object-cover shadow-lg shadow-black hover:scale-105 duration-500 filter brightness-90"
              src={Project2}
              alt=""
            />
          </div>
        </div>
        <div className="justify-center items-center border-b-2 m-auto mt-16 w-[75%]"></div>
      </div>
    </div>
  );
}

export default Projects;
