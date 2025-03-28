import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductToCart as addProductToCartAction,
  removeProductFromCart as removeProductFromCartAction,
} from "../reducers/cart";
import { ICartItem } from "../types";
import { StoreState } from "../store";

export const addProductToCart = createAsyncThunk(
  "cart/addProduct",
  async (cartItem: ICartItem, { dispatch, getState }) => {
    dispatch(addProductToCartAction(cartItem));

    localStorage.setItem(
      "cartItems",
      JSON.stringify((getState() as StoreState).cart.cartItems)
    );

    return cartItem;
  }
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeProduct",
  async (cartItem: ICartItem, { dispatch, getState }) => {
    dispatch(removeProductFromCartAction(cartItem._id));

    localStorage.setItem(
      "cartItems",
      JSON.stringify((getState() as StoreState).cart.cartItems)
    );

    return cartItem;
  }
);
