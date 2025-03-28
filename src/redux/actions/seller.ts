import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellersFailed,
} from "@/redux/reducers/seller";
import { ISeller } from "@/redux/types";
import { server } from "@/lib/server";

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
