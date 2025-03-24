import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='w-[90%] mx-auto p-2'>
      <Slider {...settings}>
        <div className='p-2 text-center'>
          <img src="use1.jpg" alt="Image 1" className='w-full rounded-lg'/>
          <h2 className='font-bold text-xl mt-4'>Romwe Fashion</h2>
          <p className='text-sm'>ROMWE improves developers' efficiency by 30% with Flutter.</p>
        </div>
        <div className='p-2 text-center'>
          <img src="use2.jpg" alt="Image 2" className='w-full rounded-lg'/>
          <h2 className='font-bold text-xl mt-4'>Tencent Cloud Chart</h2>
          <p className='text-sm'>Tencent Cloud Chart increases development efficiency by 77% with Flutter.</p>
        </div>
        <div className='p-2 text-center'>
          <img src="use3.jpg" alt="Image 3" className='w-full rounded-lg'/>
          <h2 className='font-bold mt-4 text-xl'>Google Classroom</h2>
          <p className='text-sm'>Increased productivity with Flutter.</p>
        </div>
        <div className='p-2 text-center'>
          <img src="use4.jpg" alt="Image 4" className='w-full rounded-lg'/>
          <h2 className='font-bold mt-4 text-xl'>Reflection.app</h2>
          <p className='text-sm'>Reflection scales their business with Flutter.</p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
