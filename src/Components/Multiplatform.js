import React from 'react'
import SimpleSlider from './Slider'
import Footer from './Footer'
import GetStarted from './GetStarted'

const Multiplatform = () => {
  return (
    <div className=''>
    <div className='md:bg-blue-300 mt-20 lg:bg-red-500 '>
    <div className='lg:flex flex-col md:flex-row p-12 ml-16 s'>
    <div className='lg:text-7xl lg:mt-36 lg:ml-48 text-3xl mb-4 mt-[-30px] ml-12'>
    <h1 className=''>Flutter on the</h1>
    <h1 className=''>Web</h1>
    </div>
    <img src='./logo3.png' className='w-12/12 mx-auto'></img>
    </div>
    <div className='text-4xl text-center p-4'>
    <h1 >Easily reach more users in browsers with the same</h1>
    <h1 >experience as on mobile devices through the power of</h1>
    <h1 className=''>Flutter on the web.</h1>
    </div>
</div>
<div className='lg:flex md:flex mt-16 '>
  <div className='lg:ml-40 ml-8'>
  <hr className='lg:w-80 lg:h-1 lg:bg-yellow-400 lg:mb-4 w-80 h-1 bg-black '></hr>
  <h1 className='text-3xl mt-4'><b>Shared codebase</b></h1>
  <p className='ml-12'>Share your Dart code between </p>
  <p>mobile and web applications; web is</p>
  <p>just another device target for your app.</p>
    <img src='./logo5.png' className='lg:mt-8 lg:w-12/4 w-8/12'></img>
  </div>
  <div className='ml-8 lg:ml-32'>
  <hr className='w-80 h-1 bg-yellow-400 mb-4'></hr>
  <h1 className='text-3xl'><b>Reach More Users</b></h1>
  <p>Acquire users beyond app stores</p>
  <p>without limitations from just a click</p>
  <p>of a URL in a web browser.</p>
    <img src='./logo4.png' className='w-8/12 mt-4'></img>
  </div>
  <div className='ml-8'>
  <hr className='lg:w-80 h-1 bg-yellow-400 mb-4'></hr>
  <h1 className='text-3xl'><b>Prototype faster</b></h1>
  <p>Showcase your app across multiple</p>
  <p>devices to quickly iterate and test</p>
  <p>based on customer feedback.</p>
      <img src='./logo11.png' className='w-3/4 mt-4'></img>
  </div>
</div>
<div className='lg:flex  md:flex mt-20 bg-gray-200 pt-16 p-4'>
  <div className='p-4 mt-16 ml-48 '>
    <p className='text-xl'>Flutter on the web</p>
    <h1 className='text-5xl'><b>Build better web</b></h1>
    <h1 className='text-4xl'><b>apps</b></h1>
    <p className='mt-8'>The web itself is a flexible platform but Flutter ideal for building web application like PWAS or SPAs and bringing your exixsting  </p>
    <p className=''>  mobile app to the web</p>
    <button className='mt-4 p-2 bg-gray-100 text-blue-300 border border-blue-400 rounded-xl hover:bg-red-600 hover:text-white-500'><a href='google.com' target='blank'>Learn more</a></button>
  </div>
  <div>
    <img src='./no1.png' className='w-[60%] ml-56 '></img>
  </div>
</div>
<div className='bg-[#12B3DF]'>
  <div className='ml-40 pt-20'>
    <h1 className='text-2xl'><b>Resources</b></h1>
    <h1 className='text-6xl mt-4 text-white'><b>Start learning about Flutter on the</b></h1>
    <h1 className='text-6xl mt-4 text-white mt-4'><b>web</b></h1>
  </div>
  <div className='ml-40 flex mt-24'>

     <div>
     <div className='hover:bg-[#0688F8] w-[125%]  p-8 border border-none rounded-xl hover:shadow-2xl'>
      <img src='down1.svg'></img>
      <div className='flex gap-2 '>
        <p className='text-4xl text-white mt-8'><b>See the samples</b></p>
        <img src='./you.svg' className='w-2 mt-10'></img>
      </div>
      <p className='mt-4 text-white'>Reference code examples and sample</p>
      <p className='text-white'>applications for building Flutter web apps while</p>
      <p className='text-white'>you learn</p>
      </div>


      <div className='hover:bg-[#0688F8] w-[125%] p-8 border border-none rounded-xl hover:shadow-2xl'>
      <img src='down3.svg'></img>
      <div className='flex gap-2'>
        <p className='text-4xl text-white mt-8'><b>Get started in docs</b></p>
        <img src='./you.svg' className='w-2 mt-10'></img>
      </div>
      <p className='mt-4 text-white'>Dig in and start building with more detailed</p>
      <p className='text-white'>resources for Flutter on the web in docs.</p>
      </div>
     </div>
     <div >


     <div className='ml-52'>
     <div className='hover:bg-[#0688F8] w-[125%]  p-8 border border-none rounded-xl hover:shadow-2xl'>
      <img src='down2.svg'></img>
      <div>
      <div className='flex gap-2'>
        <p className='text-4xl text-white mt-8'><b>Watch the video</b></p>
        <img src='./you.svg' className='w-2 mt-10'></img>
      </div>
        <p className='text-white mt-4'>From Mobile to web app. Learn how to adapt,</p>
        <p>debug, and deploy your app for desktop</p>
        <p>browsers.</p>
      </div>
      </div>

      <div className='hover:bg-[#0688F8] w-[125%] mb-12 p-8 hover:border border-none rounded-xl hover:shadow-2xl'>
      <img src='down4.svg'></img>
      <div className='flex gap-2'>
        <p className='text-4xl text-white mt-8'><b>Follow the roadmap</b></p>
        <img src='./you.svg' className='w-2 mt-10'></img>
      </div>
      <p className='text-white mt-2 '>See where we’re going and how you can be</p>
      <p className='text-white'>involved. Flutter support for the web is</p>
      <p className='text-white'>continually growing and evolving.</p>
      </div>
     </div>

     </div>
  </div>
</div>
<div className=''>
<h1 className='ml-20 mt-8 text-2xl font-bold'>Case studies</h1>
<SimpleSlider/>
<GetStarted/>
  <Footer/>
</div>
    </div>
  )
}

export default Multiplatform
