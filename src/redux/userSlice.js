import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Su producto fue añadido al carrito", {
        position: "top-center",
      });
    },
    setUser: (state, action) => {
      state.usuario = action.payload;
    },
  },
});

export const { addProduct, setUser } = userSlice.actions;
export default userSlice.reducer;
