import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carrito: [],
  usuario: {},
};

export const userSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.carrito = [...state.carrito, ...action.payload];
    },
    setUser: (state, action) => {
      state.usuario = action.payload;
    },
  },
});

export const { addProduct, setUser } = userSlice.actions;
export default userSlice.reducer;
