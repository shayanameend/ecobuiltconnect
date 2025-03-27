import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellersFailed,
} from "../reducers/seller";
import { ISeller } from "../types";

const server = process.env.BACKEND_URL;

export const getAllSellers = createAsyncThunk(
  "seller/getAllSellers",
  async (_, { dispatch }) => {
    try {
      dispatch(getAllSellersRequest());

      const { data } = await axios.get(`${server}/api/shops/admin/all`, {
        withCredentials: true,
      });

      dispatch(getAllSellersSuccess(data.sellers));
      return data.sellers as ISeller[];
    } catch (error: unknown) {
      dispatch(
        getAllSellersFailed(
          error.response?.data?.message || "Failed to fetch sellers"
        )
      );
      throw error;
    }
  }
);
