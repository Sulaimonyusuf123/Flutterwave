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
  };

  return (
    <div className='w-[90%] ml-16 p-2'>
      <Slider {...settings}>
        <div className='p-2'>
          <img src="use1.jpg" alt="Image 1" className=''/>
          <h2 className='font-bold text-2xl mt-4'>Romwe Fashion</h2>
          <p>ROMWE improves developers efficiency by 30% with <br/>Flutter</p>
        </div>
        <div className='p-2'>
          <img src="use2.jpg" alt="Image 2" />
          <h2 className='font-bold text-2xl mt-4'>Tencent cloud chart</h2>
          <p>Tensent cloud chart increases developmenmt efficiency by <br/> 77% with flutter</p>
        </div>
        <div className='p-2'>
          <img src="use3.jpg" alt="Image 3" />
          <h2 className='font-bold mt-4 text-2xl'>Google classroom</h2>
          <p>increaesed productivity with flutter</p>
        </div>
        <div className='p-2'>
          <img src="use4.jpg" alt="Image 3" />
          <h2 className='font-bold mt-4 text-2xl'>Reflection.app</h2>
          <p>Reflection scales thier business with flutter</p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;