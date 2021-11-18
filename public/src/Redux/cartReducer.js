import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',
  initialState:{
    product:[],
    quantity:0,
    total:0
  },
  reducers:{
      addProduct:(state,action) =>{
        state.product.push(action.payload);
        state.quantity +=1;
        state.total += action.payload.price * action.payload.quantity;
      }
  }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer