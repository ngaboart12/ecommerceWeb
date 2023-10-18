import React from 'react'
import { LiaUserCircle } from 'react-icons/lia'
import { BsCart3,BsFillBagCheckFill } from 'react-icons/bs'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Navbar() {
  const {cart} = useSelector((state)=> state.cart)
  return (
    <div className=' py-6  flex justify-between items-center'>
       <Link to='/' className="logo flex gap-2 items-center cursor-pointer">
      
        <BsFillBagCheckFill className='text-3xl text-orange-400'/>
        <span className=' text-white text-md'>easy Bag</span>
       </Link>
       <div className=' hidden  md:flex gap-4 mdd:gap-10'>
          <Link to="/" className='text-sm text-white hover:text-white/70'>Home</Link>
          <a href="#" className='text-sm text-white  hover:text-white/70'>Computer</a>
          <a href="#" className='text-sm text-white  hover:text-white/70'>Phone</a>
          <a href="#" className='text-sm text-white  hover:text-white/70'>Brand</a>
       </div>
       <div className=' hidden  md:flex gap-4 mdd:gap-10'>
        <a href="#" className=' flex text-white gap-2 items-center hover:text-orange-500'>
            <LiaUserCircle className='text-xl'/>
            <span>Login</span>
        </a>
        <Link to="/cart" className=' flex text-white gap-2 items-center hover:text-orange-500' >
            <BsCart3 className='text-xl'/>
            <span>cart</span>
            <span className=' absolute right-[19vh] text-[10px] top-6 h-4 w-4 rounded-full flex items-center justify-center bg-orange-500'>{cart.length}</span>
        </Link>
       </div>
       <div className='flex md:hidden'>
        <AiOutlineAlignRight className='text-white text-xl flex md:hidden cursor-pointer'/>
       </div>
   
    </div>
  )
}

export default Navbar
