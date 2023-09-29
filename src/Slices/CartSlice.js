import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItemToCart: (state, action) => {
      //store new item in a const
      const newItem = action.payload;
      // check if the new item already exists in the state
      const existingItem = state.find((item) => item.id === newItem.id);

      //if new item exists in the state , add the new quantity to the exisiting quantity
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.push(newItem);
      }
    },
    UpdateItemInCart: (state, action) => {
      const payload = action.payload;
      const id = payload[0];
      const newQuantity = payload[1];

      return state.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { AddItemToCart, UpdateItemInCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state) => state.cart;
