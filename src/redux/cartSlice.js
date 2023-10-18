import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers:{
        addTocart: (state,action)=>{
          const itemInCart=  state.cart.find((item)=> item.id===action.payload.id)
          if(itemInCart){
            itemInCart.quantity++
          }
          else{
            state.cart.push({...action.payload,quantity:1})
          }
        },
        removeTocart:(state,action)=>{
            const removeFromCart= state.cart.filter((item)=> item.id !== action.payload.id)
            state.cart= removeFromCart
        },
        incrementQuantity: (state,action)=>{
            const itemInCart=  state.cart.find((item)=> item.id===action.payload.id)
              itemInCart.quantity++
         
        },
        decrementQuantity: (state,action)=>{
            const itemInCart=  state.cart.find((item)=> item.id===action.payload.id)
            if(itemInCart.quantity ==1){
                const removeFromCart= state.cart.filter((item)=> item.id !== action.payload.id)
                state.cart= removeFromCart

            }else{
                itemInCart.quantity--

            }
             
          
        }

    }
})
export const {addTocart,removeTocart,incrementQuantity,decrementQuantity} =  cartSlice.actions
export default cartSlice.reducer