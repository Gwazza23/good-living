import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

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
