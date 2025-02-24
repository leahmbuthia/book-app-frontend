import { createSlice } from '@reduxjs/toolkit'
import  Swal  from 'sweetalert2'

const initialState = {
 cartItems:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
   reducers:{
        addToCart:(state, action) =>{
            const existingItem =state.cartItems.find(item=> item._id === action.payload._id)
        if(!existingItem){
            state.cartItems.push(action.payload)
           Swal.fire({
                position: "top-end",
                icon: "success",
                title: "product Added to the Cart",
                showConfirmButton: false,
                timer: 1500
                });
        }else(
         Swal.fire({
            title: "Already Added to the Cart",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok!"
})   
        )
        },
       removeFromcart:(state, action) =>{
        state.cartItems = state.cartItems.filter(item=> item._id !== action.payload._id)
       },
       clearCart:(state) =>{
        state.cartItems = []
       }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromcart,clearCart } = cartSlice.actions

export default cartSlice.reducer

