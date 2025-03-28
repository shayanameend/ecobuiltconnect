import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "@/redux/types";

const initialState: ICartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;

      const isItemExist = state.cartItems.find(
        (index) => index._id === product._id
      );

      if (isItemExist) {
        state.cartItems = state.cartItems.map((index) =>
          index._id === isItemExist._id ? product : index
        );
      } else {
        state.cartItems.push(product);
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (index) => index._id !== action.payload
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
