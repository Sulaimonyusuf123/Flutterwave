import React from 'react'


const Footer = () => {
  return (
    <div className='bg-blue-500'>
    <div className=' flex mt-24 md:ml-4 ml-24 '>
      <div className='mt-24'>
      <img src='./logo.svg'className=''></img>
      </div>
      <div className='lg:flex md:flex lg:ml-[30%] lg:mt-24 mt-40 ml-[-40%]'>
      <div className=''>
        <h1 className='font-bold text-2xl'>About flutter</h1>
        <a href='#'>Careers</a><br/>
        <a href='#'>News</a><br/>
        <a href='#'>Brand</a><br/>
        <a href='#'>Culture</a><br/>
      </div>
      <div className='lg:ml-36 '>
        <h1 className='font-bold text-2xl'>Learn flutter</h1>
        <a href='#'>Learning journey</a><br/>
        <a href='#'>Codelabs</a><br/>
        <a href='#'>Samples</a><br/>
        <a href='#'>Cookbook</a>
      </div>
      <div className='lg:ml-36'>
       <h1 className='font-bold text-2xl'>Multi-Platform</h1> 
       <a href='#'>Mobile</a><br/>
       <a href='#'>Web</a><br/>
       <a href='#'>desktop</a><br/>
        <a href='#'>Embedded</a><br/>
        <a href='#'>IOS</a>
      </div>
      </div>
    </div>
    <div className='flex gap-4 ml-20 mt-20'>
        <button><img src='ok.png' className='h-8'></img></button>
        <button><img src='twitter.png' className='h-8'></img></button>
        <button><img src='facebook.png' className='h-8'></img></button>
        <button><img src='twitter.png' className='h-8'></img></button>
        <button><img src='ok.png' className='h-8'></img></button>
    </div>
    </div>
    
  )
}

export default Footer
