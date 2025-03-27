import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISellerState, ISeller } from "../types";

const initialState: ISellerState = {
  isLoading: true,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    loadSellerRequest: (state) => {
      state.isLoading = true;
    },
    loadSellerSuccess: (state, action: PayloadAction<ISeller>) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    },
    loadSellerFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    },

    getAllSellersRequest: (state) => {
      state.isLoading = true;
    },
    getAllSellersSuccess: (state, action: PayloadAction<ISeller[]>) => {
      state.isLoading = false;
      state.sellers = action.payload;
    },
    getAllSellersFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  loadSellerRequest,
  loadSellerSuccess,
  loadSellerFail,
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellersFailed,
  clearErrors,
} = sellerSlice.actions;
export const sellerReducer = sellerSlice.reducer;
