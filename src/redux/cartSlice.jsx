import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],       // cart items
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    decrementItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (!existingItem) return;

      existingItem.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity === 0) {
        state.items = state.items.filter(i => i.id !== id);
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;
      state.items = state.items.filter(i => i.id !== id);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
