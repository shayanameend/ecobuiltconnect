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
      const isItemExist = state.cartItems.find((i) => i._id === product._id);

      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === isItemExist._id ? product : i
        );
      } else {
        state.cartItems.push(product);
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
