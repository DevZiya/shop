import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',
  initialState:{
    products:[],
    quantity:0,
    total:0
  },
  reducers:{
      addProduct:(state,action) =>{
        state.quantity +=1;
        state.total += action.payload.price * action.payload.quantity;
        state.products.push(action.payload)
      },
      deleteProduct:(state,action)=>{
        state.products=state.products.filter(product=>product.id !== action.payload._id)
        state.products.splice(state.products.findIndex(product=>product.id === action.payload._id))
        state.quantity =state.products.length
        state.total=state.total- (action.payload.price * action.payload.quantity)       
      }
  }
})

export const { addProduct, deleteProduct,decrement} = cartSlice.actions

export default cartSlice.reducer