import React from 'react'
import GetStarted from './GetStarted'
import Footer from './Footer'

const Ecosystem = () => {
  return (
    <div className=''>
   <div className='bg-blue-400 pt-48'>
   <div className='mt-4 flex ml-40'>
   <div className='mt-20'>
    <h1 className='text-6xl font-bold text-center'>A strong <br/>ecosystem,</h1>
    <h1 className='text-6xl font-bold ml-36'>powered by open source</h1>
    </div>
   <div className='ml-32'>
    <img src='new2.png' className='w-9/12'></img>
    </div>
    </div>
    <div className=''>
    <p className='text-3xl  mt-16 text-center '>From packages and plugins to friendly developers, find all of the </p>
    <p className=' text-3xl text-center pb-20'>resources you need to be successful with flutter</p>
    </div>
   </div>
   <div className='flex mt-8 justify-center items-center pb-56'>
   <div className='w-80 h-1 bg-gray-200'>
    <h1 className='mt-8 text-3xl font-bold'>Community</h1>
    <p className='mt-8 text-xl'>join developers around the world <br/>who are building with flutter</p>
    <img src='n3.jpeg' className='mt-4'></img>
   </div>
   <div className='w-80 h-1 bg-gray-200 ml-16'>
    <h1 className='mt-8 text-3xl font-bold'>Packages</h1>
    <p className='mt-8 text-xl'>Find open source packages to help<br/>you build powerful flutter apps.</p>
    <img src='next1.jpg' className='mt-4'></img>
   </div>
   <div className='w-80 h-1 bg-gray-200 ml-16'>
    <h1 className='mt-8 text-3xl font-bold'>Events</h1>
    <p className='mt-8 text-xl'>Learn about the latest Flutter <br/>developments at our global events.</p>
    <img src='new2.png' className='mt-4'></img>
    
   </div>
   </div>
   <div className=' flex mt-80 ml-52'>
   <div className='mt-24'>
    <h1 className='text-2xl font-bold '>Community</h1>
    <h1 className='text-6xl font-bold mt-4 mb-8'>Get involved</h1>
    <p className='text-2xl'>connect with flutter developers around the world,<br/>find answers, and contribute to the framework in our<br/> welcoming community spaces.</p>
    <div className='flex gap-5 mt-12'>
      <button className='border border-2 border-blue-500 bg-white-200 rounded-2xl p-2 text-blue-500 w-48'>Join the community</button>
      <div className='flex gap-2 '>
        <h1 className='mt-2 ml-4 font-bold'>More about flutter culture</h1>
        <img src='you.svg' className='w-2'></img>
      </div>
    </div>
    </div>
    <img src='nownow.png' className='ml-32 mt- w-4/12'></img>
   </div>
   <div className='bg-gray-500 p-6 pb-16'>
   <div className='ml-36 flex '>
   <div>
    <img src='nownow.png' className=''></img>
   </div>
   <div className='mt-44 ml-20'>
    <p className='text-2xl font-bold'>Events</p>
    <h1 className='text-6xl font-bold'>Everyone is <br/> invited</h1>
    <p className='mt-16 text-xl'>View upcoming events and see all of the latest talks<br/> and announcements from previous events.</p>
    <button className='mt-8 p-1 rounded-2xl bg-red-300 w-40'>see events</button>
   </div>

   </div>
   </div>


    
   <div className='flex ml-60 mt-20 '>
   <div>
    <p className='text-2xl font-bold'> packages & integration</p>
    <h1 className='text-6xl font-bold'>Find what you <br/>need on pub.dev</h1>
    <p className='text-xl mt-12'>Browse over 20,000 packages, plugins, and <br/>integration for custom UI components,<br/>authentications and solutions, state management <br/>libraries and more</p>
    <button className='p-1 rounded-2xl bg-white border border-blue-500 w-48 mt-16'>Explore packages</button>
    </div>
    <img src='useful.png' className='w-4/12 ml-48'></img>
    </div>
  



<div className='ml-40 mr-20 mt-36'>
   <GetStarted/>
   </div>  
   <Footer/>
    </div>
  )
}

export default Ecosystem
