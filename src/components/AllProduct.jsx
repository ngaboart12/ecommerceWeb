import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import computer1 from '../assets/images/computer1.png'
import phone1 from '../assets/images/phone1.jpg'
import bluethooth from '../assets/images/bluethooth.jpeg'
import mouse from '../assets/images/mouse.webp'
import { useDispatch } from 'react-redux'
import { addTocart } from '../redux/cartSlice'

function AllProduct() {
    const dispatch = useDispatch();

    const data = [
        {    
            id: 1,  
            name:'Mapple Wood Library',
            price: 1400000,
            image: computer1
        },
        {
            id:2,
            name:'AVD Protectd phone',
            price: 500000,
            image: phone1
        },
        {
            id:3,
            name:'Phillips Bluethooth',
            price: 10000,
            image: bluethooth
        },
        {
            id:4,
            name:'Wireless Mouse',
            price: 6000,
            image: mouse
        },
        
    ]
  return (
    <div className='flex flex-col gap-6 mt-10'>
   
        <h1>All Product</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mdd:grid-cols-4 gap-8'>
       

            {data.map((item,index)=>{
                return(
                    <div className='flex flex-col'>
                        <div className='w-full h-[30vh] flex items-center justify-center'>
                            <img src={item.image} alt="" className='max-h-[30vh] '/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span>{item.name}</span>
                            <span className='font-semibold'>{item.price}</span>
                            <button onClick={()=> dispatch(addTocart(item))}
                            className='bg-orange-500 text-white py-2'>
                              ADD TO CART
                            </button>
                        </div>

                    </div>
                )
            })}
   
     
            

        </div>    
      
    </div>
  )
}

export default AllProduct
