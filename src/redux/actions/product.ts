import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  getAllProductsShopRequest,
  getAllProductsShopSuccess,
  getAllProductsShopFailed,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailed,
  getAllProductsRequest,
  getAllProductsSuccess,
  getAllProductsFailed,
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
  "product/create",
  async (productData: CreateProductParams, { dispatch }) => {
    try {
      dispatch(productCreateRequest());

      const { data } = await axios.post(`${server}/api/products`, productData, {
        withCredentials: true,
      });

      dispatch(productCreateSuccess(data.product));
      return data.product as IProduct;
    } catch (error: unknown) {
      dispatch(
        productCreateFail(error.response?.data?.message || "An error occurred")
      );
      throw error;
    }
  }
);

export const getAllProductsShop = createAsyncThunk(
  "product/getAllShopProducts",
  async (id: string, { dispatch }) => {
    try {
      dispatch(getAllProductsShopRequest());

      const { data } = await axios.get(`${server}/api/products/shop/${id}`);

      dispatch(getAllProductsShopSuccess(data.products));
      return data.products as IProduct[];
    } catch (error: unknown) {
      dispatch(
        getAllProductsShopFailed(
          error.response?.data?.message || "Failed to fetch shop products"
        )
      );
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id: string, { dispatch }) => {
    try {
      dispatch(deleteProductRequest());

      const { data } = await axios.delete(`${server}/api/products/${id}`, {
        withCredentials: true,
      });

      dispatch(deleteProductSuccess(data.message));
      return data.message;
    } catch (error: unknown) {
      dispatch(
        deleteProductFailed(
          error.response?.data?.message || "Failed to delete product"
        )
      );
      throw error;
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getAll",
  async (_, { dispatch }) => {
    try {
      dispatch(getAllProductsRequest());

      const { data } = await axios.get(`${server}/api/products`);

      dispatch(getAllProductsSuccess(data.products));
      return data.products as IProduct[];
    } catch (error: unknown) {
      dispatch(
        getAllProductsFailed(
          error.response?.data?.message || "Failed to fetch products"
        )
      );
      throw error;
    }
  }
);
