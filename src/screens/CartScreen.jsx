import React from 'react'
import Navbar from '../components/navbar'
import { useSelector,useDispatch } from 'react-redux'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import { decrementQuantity, incrementQuantity } from '../redux/cartSlice'

function CartScreen() {
    const {cart} = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
  return (
    <div className='w-full'>
        <div className=' bg-gradient-to-r from-blue-800 to-blue-600 px-20'>
        <Navbar/>
        </div>
        <div className=' w-full flex justify-center pt-10'>
            <div className=' px-5 w-full mdd:w-1/2 flex flex-col gap-5'>

            <div className='flex w-full justify-between items-center'>
                <span className='text-2xl font-semibold'>Your Shooping Bag</span>
                <span>Empty Bag</span>
            </div>
            <div className=' w-full'> 
            <table className=' table-auto w-full'>
                <tr className='h-[10vh]'>
                    <th className=' font-normal text-start' >Item</th>
                    <th className=' font-normal text-center'>Quantity</th>
                    <th className=' font-normal text-center'>Price</th>
                </tr>
                 {cart.map((item,index)=>{
                    return(
                        <tr className='gap-10  h-[20vh]'>
                            <td className='items-center  flex gap-6'>
                                <div className='w-[15vh]'>
                                <img src={item.image} className=' max-h-[10vh] ' alt="" />
                                </div>
                                <div>
                                    <span>{item.name}</span>
                                </div>
                            </td>
                            <td className='text-center'>
                                <div className=' flex gap-2 justify-center items-center'>
                                <BsChevronLeft onClick={()=> dispatch(decrementQuantity(item))}
                                 className='hover:text-black/50'/>
                                <span className='w-[30px] h-[30px] border-black border flex justify-center items-center'>
                                {item.quantity}

                                </span>
                                <BsChevronRight onClick={()=> dispatch(incrementQuantity(item))}
                                 className='hover:text-black/50'/>

                                </div>
                            </td>
                            <td className='text-center'>{item.price}</td>
                        </tr>
                    )
                 })}
            </table>
            </div>
           
            </div>
        </div>
        <div className=' w-full h-[10vh] bg-white  items-center border border-black/40 fixed bottom-0 flex justify-between'>
            <div className='px-6'><span>total Price</span></div>
            <div className='h-full'>
                <button className=' w-[140px] h-full bg-orange-500 text-white'>
                    Check It Out
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default CartScreen

