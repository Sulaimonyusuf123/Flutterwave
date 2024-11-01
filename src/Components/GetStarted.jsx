import React from 'react'

const GetStarted = () => {
  return (
    <div className='bg-blue-800 w-[90%] ml-16 mt-12 border-none rounded-2xl p-12'>
  <div className='h-56 text-white'>
    <h1 className='font-bold text-4xl'>Get started</h1>
    <p className='mt-8 mb-8'>Instant access to the power of the flutter framework</p>
    <div className='flex gap-4'>
      <button className='p-2 bg-white text-blue-900 rounded-xl w-36 hover:bg-red-500 hover:text-white'>install</button> 
      <div className='flex gap-4'>
        <a href='#' className='mt-1'>Read the docs</a>
      <button><img src='you.svg' className='w-4'></img></button>  
      </div>
    </div>
  </div>
</div>
  )
}

export default GetStarted
