import React from 'react'
import GetStarted from './GetStarted'
import Footer from './Footer'

const Ecosystem = () => {
  return (
    <div className=''>
   <div className='bg-blue-400 md:pt-48 pt-12'>
   <div className='mt-4 md:flex md:ml-40'>
   <div className='md:mt-20 mt-20'>
    <h1 className='text-6xl font-bold text-center '>A strong <br/>ecosystem,</h1>
    <h1 className='md:text-6xl font-bold md:ml-36 text-3xl ml-6 '>powered by open source</h1>
    </div>
   <div className='md:ml-32 ml-16 mt-4'>
    <img src='new2.png' className='w-9/12'></img>
    </div>
    </div>
    <div className=''>
    <p className='text-3xl  mt-16 text-center '>From packages and plugins to friendly developers, find all of the </p>
    <p className=' text-3xl text-center pb-20'>resources you need to be successful with flutter</p>
    </div>
   </div>

   <div className='md:flex mt-8 justify-center items-center pb-56'>
   <div className='w-80 h-1 bg-gray-200 md:ml-0 ml-10'>
    <h1 className='md:mt-8 text-3xl font-bold md:ml-0 ml-20 '>Community</h1>
    <p className='mt-8 text-xl md:ml-0'>join developers around the world <br/>who are building with flutter</p>
    <img src='n3.jpeg' className='mt-4  w-1/2 md:w-11/12 mx-auto md:mx-0'></img>
   </div>
   <div className='w-80 h-1 bg-gray-200 md:ml-16 ml-10 md:mt-0 mt-[80%]'>
    <h1 className='mt-8 text-3xl font-bold md:ml-0 ml-24'>Packages</h1>
    <p className='mt-8 text-xl'>Find open source packages to help<br/>you build powerful flutter apps.</p>
    <img src='next1.jpg' className='mt-4 w-1/2 md:w-11/12 mx-auto md:mx-0'></img>
   </div>
   <div className='w-80 h-1 bg-gray-200 md:ml-16 ml-10 md:mt-0 mt-[80%]'>
    <h1 className='mt-8 text-3xl font-bold md:ml-0 ml-28'>Events</h1>
    <p className='mt-8 text-xl'>Learn about the latest Flutter <br/>developments at our global events.</p>
    <img src='new2.png' className='mt-4 w-1/2 md:w-11/12 mx-auto md:mx-0'></img>
    
   </div>
   </div>

   <div className=' md:flex md:mt-80 md:ml-52'>
   <div className='mt-24 '>
    <h1 className='text-2xl font-bold md:ml-0 ml-32 '>Community</h1>
    <h1 className='md:text-6xl font-bold mt-4 mb-8 text-4xl md:ml-0 ml-20 '>Get involved</h1>
    <p className='text-2xl md:ml-0 ml-8'>connect with flutter developers around the world,<br/>find answers, and contribute to the framework in our<br/> welcoming community spaces.</p>
    <div className='md:flex gap-5 mt-12'>
      <button className='border border-2 border-blue-500 bg-white-200 rounded-2xl p-2 text-blue-500 w-48 md:ml-0 ml-24'>Join the community</button>
      <div className='flex gap-2 md:ml-0 ml-20 '>
        <h1 className='mt-2 ml-4 font-bold'>More about flutter culture</h1>
        <img src='you.svg' className='w-2 mt-2'></img>
      </div>
    </div>
    </div>
    <img src='nownow.png' className='ml-32 mt- w-4/12'></img>
   </div>
   <div className='bg-gray-500 p-6 pb-16'>
   <div className='md:ml-36 md:flex '>
   <div>
    <img src='nownow.png' className=''></img>
   </div>
   <div className='md:mt-44 md:ml-20 '>
    <p className='text-2xl font-bold ml-32'>Events</p>
    <h1 className='md:text-6xl font-bold text-4xl md:ml-0 ml-16 '>Everyone is <br/> invited</h1>
    <p className='mt-16 text-xl'>View upcoming events and see all of the latest talks<br/> and announcements from previous events.</p>
    <button className='mt-8 p-1 rounded-2xl bg-red-300 w-40 md:ml-0 ml-20'>see events</button>
   </div>

   </div>
   </div>


    
   <div className='md:flex md:ml-60 md:mt-20 mt-8'>
   <div>
    <p className='text-2xl font-bold md:ml-0 ml-16'> packages & integration</p>
    <h1 className='md:text-6xl font-bold text-3xl md:ml-0 ml-20 mt-8'>Find what you <br/>need on pub.dev</h1>
    <p className='md:text-xl mt-12 ml-16 md:ml-0 '>Browse over 20,000 packages, plugins, and <br/>integration for custom UI components,<br/>authentications and solutions, state management <br/>libraries and more</p>
    <button className='p-1 rounded-2xl bg-white border border-blue-500 w-48 mt-8 md:ml-0 ml-24 md:mt-16'>Explore packages</button>
    </div>
    <img src='useful.png' className='md:w-4/12 md:ml-48'></img>
    </div>
  



<div className=''>
   <GetStarted/>
   </div>  
   <Footer/>
    </div>
  )
}

export default Ecosystem
