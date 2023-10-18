import React from 'react'
import headphone from '../assets/images/headphone.jpg'
import canon from '../assets/images/canon.png'

function HotProduct() {
  return (
    <div className='flex flex-col mdd:flex-row gap-4 w-full  '>
        <div className='p-6 mdd:w-1/2 flex flex-col bg-white rounded-md shadow-black shadow-sm'>
            <span className='text-xl font-semibold text-center'>Head Phones</span>
            <div className='w-full flex-col flex md:flex-row items-center justify-center '>

            <span className='text-sm text-black/60 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Similique architecto aliquid numquam excepturi consequuntur nostrum fugit eius perspiciatis.
                 </span>
            <img src={headphone} alt=""  className=' max-h-[25vh]'/>

            </div>
            <div>
                <a href="#" className=' text-orange-500'> View Details</a>
            </div>
            
        </div>
        <div className='p-6 mdd:w-1/2 flex flex-col bg-white rounded-md shadow-black shadow-sm'>
            <span className='text-xl font-semibold text-center'>Canon Eos M5</span>
            <div className='w-full flex-col flex md:flex-row items-center justify-center  '>

            <span className='text-sm text-black/60 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Similique architecto aliquid numquam excepturi consequuntur nostrum fugit eius perspiciatis.
                 </span>
            <img src={canon} alt=""  className=' max-h-[25vh]'/>

            </div>
            <div>
                <a href="#" className=' text-orange-500'> View Details</a>
            </div>
            
        </div>
      
      
    </div>
  )
}

export default HotProduct
