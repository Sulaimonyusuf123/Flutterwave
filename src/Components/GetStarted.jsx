import React from 'react'

const GetStarted = () => {
  return (
    <div className='bg-blue-800 w-[90%] md:ml-16 ml-4 mt-12 border-none rounded-2xl p-12 
      md:w-[90%] md:ml-16 md:mt-12 md:p-12 sm:w-full sm:ml-0 sm:mt-8 sm:p-6'>
      
      <div className='h-56 text-white sm:h-auto'>
        <h1 className='font-bold text-4xl sm:text-2xl'>Get started</h1>
        <p className='mt-8 mb-8 sm:mt-4 sm:mb-4 sm:text-sm'>Instant access to the power of the flutter framework</p>

        <div className='flex gap-4 sm:flex-col sm:gap-2'>
          <button className='p-2 bg-white text-blue-900 rounded-xl w-36 hover:bg-red-500 hover:text-white 
            sm:w-full sm:text-sm sm:p-2'>Install</button> 
          
          <div className='flex gap-4 sm:flex-col sm:gap-2'>
            <a href='#' className='mt-1 sm:text-sm sm:mt-0'>Read the docs</a>
            <button className='sm:w-full'><img src='you.svg' className='w-4 sm:w-6' alt='icon'/></button>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
