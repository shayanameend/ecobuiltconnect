import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
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
} from "../reducers/product";
import { IProduct } from "../types";

const server = process.env.BACKEND_URL;

// Define proper typing for product creation
interface CreateProductParams {
  name: string;
  description: string;
  category: string;
  tags: string[];
  originalPrice: number;
  discountPrice: number;
  stock: number;
  shopId: string;
  images: string[];
}

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData: CreateProductParams, { dispatch }) => {
    try {
      dispatch(createProductRequest());

      const { data } = await axios.post(`${server}/api/products`, productData, {
        withCredentials: true,
      });

      dispatch(createProductSuccess(data.product));
      return data.product as IProduct;
    } catch (error: unknown) {
      dispatch(
        createProductFailure(
          error.response?.data?.message || "An error occurred"
        )
      );
      throw error;
    }
  }
);

export const fetchShopProducts = createAsyncThunk(
  "product/fetchShopProducts",
  async (shopId: string, { dispatch }) => {
    try {
      dispatch(fetchShopProductsRequest());

      const { data } = await axios.get(`${server}/api/products/shop/${shopId}`);

      dispatch(fetchShopProductsSuccess(data.products));
      return data.products as IProduct[];
    } catch (error: unknown) {
      dispatch(
        fetchShopProductsFailure(
          error.response?.data?.message || "Failed to fetch shop products"
        )
      );
      throw error;
    }
  }
);

export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (productId: string, { dispatch }) => {
    try {
      dispatch(removeProductRequest());

      const { data } = await axios.delete(
        `${server}/api/products/${productId}`,
        {
          withCredentials: true,
        }
      );

      dispatch(removeProductSuccess(data.message));
      return data.message;
    } catch (error: unknown) {
      dispatch(
        removeProductFailure(
          error.response?.data?.message || "Failed to delete product"
        )
      );
      throw error;
    }
  }
);

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchAllProductsRequest());

      const { data } = await axios.get(`${server}/api/products`);

      dispatch(fetchAllProductsSuccess(data.products));
      return data.products as IProduct[];
    } catch (error: unknown) {
      dispatch(
        fetchAllProductsFailure(
          error.response?.data?.message || "Failed to fetch products"
        )
      );
      throw error;
    }
  }
);
