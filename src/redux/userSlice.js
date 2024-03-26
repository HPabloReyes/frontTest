import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carrito: [],
};

export const userSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.carrito.push(action.payload);
    },
  },
});

export const { addProduct } = userSlice.actions;
export default userSlice.reducer;
