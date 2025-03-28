import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductState, IProduct } from "../types";

const initialState: IProductState = {
  isLoading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductRequest: (state) => {
      state.isLoading = true;
    },
    createProductSuccess: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    },
    createProductFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    fetchShopProductsRequest: (state) => {
      state.isLoading = true;
    },
    fetchShopProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    fetchShopProductsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    removeProductRequest: (state) => {
      state.isLoading = true;
    },
    removeProductSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    removeProductFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    fetchAllProductsRequest: (state) => {
      state.isLoading = true;
    },
    fetchAllProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    fetchAllProductsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  fetchShopProductsRequest,
  fetchShopProductsSuccess,
  fetchShopProductsFailure,
  removeProductRequest,
  removeProductSuccess,
  removeProductFailure,
  fetchAllProductsRequest,
  fetchAllProductsSuccess,
  fetchAllProductsFailure,
  clearErrors,
} = productSlice.actions;
export const productReducer = productSlice.reducer;
