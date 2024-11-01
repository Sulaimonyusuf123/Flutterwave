import React from 'react'


const Footer = () => {
  return (
    <div className='bg-blue-500'>
    <div className=' flex mt-24'>
      <div className='mt-24'>
      <img src='./logo.svg'className='ml-14'></img>
      </div>
      <div className='flex ml-[30%] mt-24'>
      <div className=''>
        <h1 className='font-bold text-2xl'>About flutter</h1>
        <a href='#'>Careers</a><br/>
        <a href='#'>News</a><br/>
        <a href='#'>Brand</a><br/>
        <a href='#'>Culture</a><br/>
      </div>
      <div className='ml-36'>
        <h1 className='font-bold text-2xl'>Learn flutter</h1>
        <a href='#'>Learning journey</a><br/>
        <a href='#'>Codelabs</a><br/>
        <a href='#'>Samples</a><br/>
        <a href='#'>Cookbook</a>
      </div>
      <div className='ml-36'>
       <h1 className='font-bold text-2xl'>Multi-Platform</h1> 
       <a href='#'>Mobile</a><br/>
       <a href='#'>Web</a><br/>
       <a href='#'>desktop</a><br/>
        <a href='#'>Embedded</a><br/>
        <a href='#'>IOS</a>
      </div>
      </div>
    </div>
    <div className='flex gap-4 ml-16 mt-20'>
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
