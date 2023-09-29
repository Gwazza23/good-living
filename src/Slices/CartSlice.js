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
  },
});

export const { AddItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state) => state.cart;
