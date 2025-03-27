import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderState, IOrder } from "../types";

const initialState: IOrderState = {
  isLoading: true,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getUserOrdersRequest: (state) => {
      state.isLoading = true;
    },
    getUserOrdersSuccess: (state, action: PayloadAction<IOrder[]>) => {
      state.isLoading = false;
      state.userOrders = action.payload;
    },
    getUserOrdersFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getShopOrdersRequest: (state) => {
      state.isLoading = true;
    },
    getShopOrdersSuccess: (state, action: PayloadAction<IOrder[]>) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    getShopOrdersFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getAdminOrdersRequest: (state) => {
      state.adminOrderLoading = true;
    },
    getAdminOrdersSuccess: (state, action: PayloadAction<IOrder[]>) => {
      state.adminOrderLoading = false;
      state.adminOrders = action.payload;
    },
    getAdminOrdersFailed: (state, action: PayloadAction<string>) => {
      state.adminOrderLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  getUserOrdersRequest,
  getUserOrdersSuccess,
  getUserOrdersFailed,
  getShopOrdersRequest,
  getShopOrdersSuccess,
  getShopOrdersFailed,
  getAdminOrdersRequest,
  getAdminOrdersSuccess,
  getAdminOrdersFailed,
  clearErrors,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
