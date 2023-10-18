import React from 'react'
import img1 from '../assets/images/vector.avif'

function HeroSection() {
  return (
    <div className=' flex-col-reverse flex mdd:flex-row items-center gap-10 w-full '>
        <div className='  flex flex-col gap-6 mdd:w-1/2  items-center mdd:items-start'>
            <span className='text-4xl lg:text-6xl text-white font-semibold w-full text-center mdd:text-left'>Get Right Products to market, Faster</span>
            <span className='text-white/60 text-sm w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est provident ratione ut quo quidem vel ea
                 quae officiis velit corporis minima cupiditate expedita vitae nihil, animi doloribus autem quam.
               
            </span>
            <button className=' py-5 bg-orange-500 w-[200px] rounded-md  text-white text-lg'>
                Shop Now
            </button>
        </div>
        <div>
         <img src={img1} alt=""  className=' max-h-[40vh]'/>
        </div>
      
    </div>
  )
}

export default HeroSection
