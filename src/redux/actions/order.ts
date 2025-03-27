import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllOrdersUserRequest,
  getAllOrdersUserSuccess,
  getAllOrdersUserFailed,
  getAllOrdersShopRequest,
  getAllOrdersShopSuccess,
  getAllOrdersShopFailed,
  adminAllOrdersRequest,
  adminAllOrdersSuccess,
  adminAllOrdersFailed,
} from "../reducers/order";
import { IOrder } from "../types";

const server = process.env.BACKEND_URL;

export const getAllOrdersOfUser = createAsyncThunk(
  "order/getAllUserOrders",
  async (userId: string, { dispatch }) => {
    try {
      dispatch(getAllOrdersUserRequest());

      const { data } = await axios.get(
        `${server}/order/get-all-orders/${userId}`,
        { withCredentials: true }
      );

      dispatch(getAllOrdersUserSuccess(data.orders));
      return data.orders as IOrder[];
    } catch (error: unknown) {
      dispatch(
        getAllOrdersUserFailed(
          error.response?.data?.message || "Failed to fetch user orders"
        )
      );
      throw error;
    }
  }
);

export const getAllOrdersOfShop = createAsyncThunk(
  "order/getAllShopOrders",
  async (shopId: string, { dispatch }) => {
    try {
      dispatch(getAllOrdersShopRequest());

      const { data } = await axios.get(
        `${server}/order/get-seller-all-orders/${shopId}`,
        { withCredentials: true }
      );

      dispatch(getAllOrdersShopSuccess(data.orders));
      return data.orders as IOrder[];
    } catch (error: unknown) {
      dispatch(
        getAllOrdersShopFailed(
          error.response?.data?.message || "Failed to fetch shop orders"
        )
      );
      throw error;
    }
  }
);

export const getAllOrdersOfAdmin = createAsyncThunk(
  "order/getAllAdminOrders",
  async (_, { dispatch }) => {
    try {
      dispatch(adminAllOrdersRequest());

      const { data } = await axios.get(`${server}/order/admin-all-orders`, {
        withCredentials: true,
      });

      dispatch(adminAllOrdersSuccess(data.orders));
      return data.orders as IOrder[];
    } catch (error: unknown) {
      dispatch(
        adminAllOrdersFailed(
          error.response?.data?.message || "Failed to fetch admin orders"
        )
      );
      throw error;
    }
  }
);
