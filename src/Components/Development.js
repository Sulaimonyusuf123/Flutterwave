import React from 'react';
import Footer from './Footer';
import SimpleSlider from './Slider';
import GetStarted from './GetStarted';

const Development = () => {
  return (
    <div>
      
      <div className='flex flex-col md:flex-row ml-10 md:ml-40 mt-10 md:mt-20'>
        <div className='order-2 md:order-1'>
          <div className='md:ml-48  md:mt-24 text-center md:text-left'>
            <p className='text-lg ml-[-36px] md:ml-0'>Documentation</p>
            <h1 className='text-5xl ml-[-18px] md:ml-0 md:text-7xl'><b>Extensive flutter</b><br/><b>docs</b></h1>
            <p className='mt-8 ml-[-36px] md:ml-0 md:text-2xl'>Find documentation for everything flutter-from<br/> interactive examples and tutorials to building and<br/> deploying your first flutter app.</p>
            <div className='flex flex-col md:flex-row mt-6 gap-6 justify-center md:justify-start'>
              <button className='p-2 text-white bg-red-500 rounded-3xl w-36 ml-24 md:ml-0'>Get started</button>
              <div className='flex gap-3 justify-center md:justify-start md:ml-0 ml-[-60px]'>
                <p className='mt-2'>Switching to flutterwave? view our guides</p>
                <img src='./you.svg' className='w-3' alt='arrow ' />
              </div>
            </div>
        </div>  
        </div>
        <img src='./dev1.jpg' className='order-1 md:order-2 w-full md:w-[500px] mt-10 md:mt-0 ml-[-24px] md:ml-0' alt='Development' />
      </div>
      <div className=''>
     <SimpleSlider />
        <GetStarted />
      <Footer />
     </div>
    </div>
    
  );
};

export default Development;