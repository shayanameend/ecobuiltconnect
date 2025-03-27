import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
} from "../reducers/cart";
import { ICartItem } from "../types";
import { StoreState } from "../store";

export const addToCart = createAsyncThunk(
  "cart/add",
  async (data: ICartItem, { dispatch, getState }) => {
    dispatch(addToCartAction(data));

    localStorage.setItem(
      "cartItems",
      JSON.stringify((getState() as StoreState).cart.cart)
    );

    return data;
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (data: ICartItem, { dispatch, getState }) => {
    dispatch(removeFromCartAction(data._id));

    localStorage.setItem(
      "cartItems",
      JSON.stringify((getState() as StoreState).cart.cart)
    );

    return data;
  }
);
