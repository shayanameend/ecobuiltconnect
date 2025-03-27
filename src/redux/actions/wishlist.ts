import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToWishlist as addToWishlistAction,
  removeFromWishlist as removeFromWishlistAction,
} from "../reducers/wishlist";
import { IProduct } from "../types";
import { StoreState } from "../store";

export const addToWishlist = createAsyncThunk(
  "wishlist/add",
  async (data: IProduct, { dispatch, getState }) => {
    dispatch(addToWishlistAction(data));

    localStorage.setItem(
      "wishlistItems",
      JSON.stringify((getState() as StoreState).wishlist.wishlist)
    );

    return data;
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/remove",
  async (data: IProduct, { dispatch, getState }) => {
    dispatch(removeFromWishlistAction(data._id));

    localStorage.setItem(
      "wishlistItems",
      JSON.stringify((getState() as StoreState).wishlist.wishlist)
    );

    return data;
  }
);
