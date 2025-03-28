import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductToWishlist as addProductToWishlistAction,
  removeProductFromWishlist as removeProductFromWishlistAction,
} from "@/redux/reducers/wishlist";
import { IProduct } from "@/redux/types";
import { StoreState } from "../store";

export const addProductToWishlist = createAsyncThunk(
  "wishlist/addProduct",
  async (product: IProduct, { dispatch, getState }) => {
    dispatch(addProductToWishlistAction(product));

    localStorage.setItem(
      "wishlistItems",
      JSON.stringify((getState() as StoreState).wishlist.wishlistItems)
    );

    return product;
  }
);

export const removeProductFromWishlist = createAsyncThunk(
  "wishlist/removeProduct",
  async (product: IProduct, { dispatch, getState }) => {
    dispatch(removeProductFromWishlistAction(product._id));

    localStorage.setItem(
      "wishlistItems",
      JSON.stringify((getState() as StoreState).wishlist.wishlistItems)
    );

    return product;
  }
);
