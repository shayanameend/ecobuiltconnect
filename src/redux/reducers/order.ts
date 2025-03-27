import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderState, IOrder } from "../types";

const initialState: IOrderState = {
  isLoading: true,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getAllOrdersUserRequest: (state) => {
      state.isLoading = true;
    },
    getAllOrdersUserSuccess: (state, action: PayloadAction<IOrder[]>) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    getAllOrdersUserFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getAllOrdersShopRequest: (state) => {
      state.isLoading = true;
    },
    getAllOrdersShopSuccess: (state, action: PayloadAction<IOrder[]>) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    getAllOrdersShopFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    adminAllOrdersRequest: (state) => {
      state.adminOrderLoading = true;
    },
    adminAllOrdersSuccess: (state, action: PayloadAction<IOrder[]>) => {
      state.adminOrderLoading = false;
      state.adminOrders = action.payload;
    },
    adminAllOrdersFailed: (state, action: PayloadAction<string>) => {
      state.adminOrderLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  getAllOrdersUserRequest,
  getAllOrdersUserSuccess,
  getAllOrdersUserFailed,
  getAllOrdersShopRequest,
  getAllOrdersShopSuccess,
  getAllOrdersShopFailed,
  adminAllOrdersRequest,
  adminAllOrdersSuccess,
  adminAllOrdersFailed,
  clearErrors,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
