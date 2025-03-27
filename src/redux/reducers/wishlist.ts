import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IWishlistState } from "../types";

const initialState: IWishlistState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems") || "[]")
    : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductToWishlist: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const isItemExist = state.wishlistItems.find(
        (i) => i._id === product._id
      );

      if (isItemExist) {
        state.wishlistItems = state.wishlistItems.map((i) =>
          i._id === isItemExist._id ? product : i
        );
      } else {
        state.wishlistItems.push(product);
      }
    },
    removeProductFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlistItems = state.wishlistItems.filter(
        (i) => i._id !== action.payload
      );
    },
  },
});

export const { addProductToWishlist, removeProductFromWishlist } =
  wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
