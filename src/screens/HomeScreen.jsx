import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection'
import HotProduct from '../components/HotProduct'
import AllProduct from '../components/AllProduct'

function HomeScreen() {
  return (
    <div className=' flex flex-col gap-4'>
    <div className='px-20 min-h-[100vh] pb-4 flex flex-col gap-5 bg-gradient-to-r from-blue-800 to-blue-600'>
        <Navbar/>
        <HeroSection/>
        <HotProduct/>
  
      
    </div>
    <div className='px-20 w-full min-h-[0vh] bg-white'>
        <AllProduct/>

        </div>
    </div>
  )
}

export default HomeScreen
