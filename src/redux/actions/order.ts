import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserOrdersRequest,
  getUserOrdersSuccess,
  getUserOrdersFailed,
  getShopOrdersRequest,
  getShopOrdersSuccess,
  getShopOrdersFailed,
  getAdminOrdersRequest,
  getAdminOrdersSuccess,
  getAdminOrdersFailed,
} from "@/redux/reducers/order";
import { IOrder } from "@/redux/types";
import { server } from "@/lib/server";

export const getUserOrders = createAsyncThunk(
  "order/getUserOrders",
  async (userId: string, { dispatch }) => {
    try {
      dispatch(getUserOrdersRequest());

      const { data } = await axios.get(`${server}/api/orders/user/${userId}`, {
        withCredentials: true,
      });

      dispatch(getUserOrdersSuccess(data.orders));
      return data.orders as IOrder[];
    } catch (error: unknown) {
      dispatch(
        getUserOrdersFailed(
          error.response?.data?.message || "Failed to fetch user orders"
        )
      );
      throw error;
    }
  }
);

export const getShopOrders = createAsyncThunk(
  "order/getShopOrders",
  async (shopId: string, { dispatch }) => {
    try {
      dispatch(getShopOrdersRequest());

      const { data } = await axios.get(
        `${server}/api/orders/seller/${shopId}`,
        { withCredentials: true }
      );

      dispatch(getShopOrdersSuccess(data.orders));
      return data.orders as IOrder[];
    } catch (error: unknown) {
      dispatch(
        getShopOrdersFailed(
          error.response?.data?.message || "Failed to fetch shop orders"
        )
      );
      throw error;
    }
  }
);

export const getAdminOrders = createAsyncThunk(
  "order/getAdminOrders",
  async (_, { dispatch }) => {
    try {
      dispatch(getAdminOrdersRequest());

      const { data } = await axios.get(`${server}/api/orders/admin`, {
        withCredentials: true,
      });

      dispatch(getAdminOrdersSuccess(data.orders));
      return data.orders as IOrder[];
    } catch (error: unknown) {
      dispatch(
        getAdminOrdersFailed(
          error.response?.data?.message || "Failed to fetch admin orders"
        )
      );
      throw error;
    }
  }
);
