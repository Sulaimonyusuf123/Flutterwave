import React from 'react';
import SimpleSlider from './Slider';
import Footer from './Footer';
import GetStarted from './GetStarted';

const Multiplatform = () => {
  return (
    <div className="">
      
      <div className="md:bg-blue-300 mt-20 lg:bg-red-500">
        <div className="lg:flex lg:flex-row md:flex-col p-12 ml-16">
          <div className="lg:text-7xl lg:mt-36 lg:ml-48 text-3xl mb-4 mt-[-30px]  md:ml-12 md:text-center md:text-left">
            <h1 className=''>Flutter on the</h1>
            <h1 className='ml-12 md:ml-0' >Web</h1>
          </div>
          <img src="./logo3.png" className="w-full ml-[-30px] md:mx-auto lg:w-1/2 md:w-3/4" alt="Flutter on Web" />
        </div>
        <div className="text-lg md:text-4xl text-center p-4 px-6 md:px-0">
          <h1>Easily reach more users in browsers with the same</h1>
          <h1>experience as on mobile devices through the power of</h1>
          <h1>Flutter on the web.</h1>
        </div>
      </div>

      
      <div className="lg:flex lg:space-x-16 mt-16 space-y-12 lg:space-y-0 text-center md:text-left">
        <div className="lg:ml-40 ml-4 md:ml-8">
          <hr className="lg:w-80 lg:h-1 lg:bg-yellow-400 lg:mb-4 w-40 h-1 bg-black mx-auto md:mx-0" />
          <h1 className="text-2xl md:text-3xl mt-4 font-bold">Shared codebase</h1>
          <p className="ml-0 md:ml-12">Share your Dart code between mobile and web applications; web is just another device target for your app.</p>
          <img src="./logo5.png" className="mt-4 md:mt-8 w-1/2 md:w-8/12 mx-auto md:mx-0" alt="Shared codebase" />
        </div>

        <div className="ml-4 md:ml-8 lg:ml-32">
          <hr className="w-40 md:w-80 h-1 bg-yellow-400 mb-4 mx-auto md:mx-0" />
          <h1 className="text-2xl md:text-3xl font-bold">Reach More Users</h1>
          <p>Acquire users beyond app stores without limitations from just a click of a URL in a web browser.</p>
          <img src="./logo4.png" className="w-1/2 md:w-8/12 mt-4 mx-auto md:mx-0" alt="Reach More Users" />
        </div>

        <div className="ml-4 md:ml-8">
          <hr className="w-40 md:w-80 h-1 bg-yellow-400 mb-4 mx-auto md:mx-0" />
          <h1 className="text-2xl md:text-3xl font-bold">Prototype faster</h1>
          <p>Showcase your app across multiple devices to quickly iterate and test based on customer feedback.</p>
          <img src="./logo11.png" className="w-3/4 mt-4 mx-auto md:mx-0" alt="Prototype faster" />
        </div>
      </div>

     
      <div className="lg:flex md:flex mt-20 bg-gray-200 pt-16 p-4 text-center md:text-left">
        <div className="p-4 mt-8 md:mt-16 md:ml-48">
          <p className="text-lg md:text-xl">Flutter on the web</p>
          <h1 className="text-3xl md:text-5xl font-bold">Build better web apps</h1>
          <p className="mt-4 md:mt-8">Flutter is ideal for building web applications like PWAs or SPAs and bringing your existing mobile app to the web.</p>
          <button className="mt-4 p-2 bg-gray-100 text-blue-500 border border-blue-400 rounded-xl hover:bg-red-600 hover:text-white">
            <a href="google.com" target="_blank">Learn more</a>
          </button>
        </div>
        <div>
          <img src="./no1.png" className="w-3/4 md:w-[60%] mx-auto md:ml-56" alt="Build better web apps" />
        </div>
      </div>

      
      <div className="">
        <h1 className="ml-4 md:ml-20 mt-8 text-xl md:text-2xl font-bold">Case studies</h1>
        <SimpleSlider />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default Multiplatform;