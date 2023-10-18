import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'user',
    initialState:{
        user: [],
        feedback: null
    },
    reducers:{
        register: (state,action)=>{
            const emailVerify = state.user.find((item)=> item.email===action.payload.email);
            if(emailVerify){
                state.feedback= 'email already taken'
            }
            else{
                state.user.push({...action.payload})
            }

        },
        
    }
})