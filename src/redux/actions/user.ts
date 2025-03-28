import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFailed,
  updateUserAddressRequest,
  updateUserAddressSuccess,
  updateUserAddressFailed,
  deleteUserAddressRequest,
  deleteUserAddressSuccess,
  deleteUserAddressFailed,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailed,
} from "../reducers/user";
import {
  loadSellerRequest,
  loadSellerSuccess,
  loadSellerFail,
} from "../reducers/seller";

const server = process.env.BACKEND_URL;

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, { dispatch }) => {
    try {
      dispatch(loadUserRequest());
      const { data } = await axios.get(`${server}/api/users/me`, {
        withCredentials: true,
      });
      dispatch(loadUserSuccess(data.user));
      return data.user;
    } catch (error: unknown) {
      dispatch(
        loadUserFail(error.response?.data?.message || "Failed to load user")
      );
      throw error;
    }
  }
);

export const loadSeller = createAsyncThunk(
  "user/loadSeller",
  async (_, { dispatch }) => {
    try {
      dispatch(loadSellerRequest());
      const { data } = await axios.get(`${server}/api/shops/me`, {
        withCredentials: true,
      });
      dispatch(loadSellerSuccess(data.seller));
      return data.seller;
    } catch (error: unknown) {
      dispatch(
        loadSellerFail(error.response?.data?.message || "Failed to load seller")
      );
      throw error;
    }
  }
);

export const updateUserInformation = createAsyncThunk(
  "user/updateInfo",
  async (
    {
      name,
      email,
      phoneNumber,
      password,
    }: {
      name: string;
      email: string;
      phoneNumber: string;
      password: string;
    },
    { dispatch }
  ) => {
    try {
      dispatch(updateUserInfoRequest());

      const { data } = await axios.put(
        `${server}/api/users/info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch(updateUserInfoSuccess(data.user));
      return data.user;
    } catch (error: unknown) {
      dispatch(
        updateUserInfoFailed(
          error.response?.data?.message || "Failed to update user information"
        )
      );
      throw error;
    }
  }
);

export const updateUserAddress = createAsyncThunk(
  "user/updateAddress",
  async (
    {
      country,
      city,
      address1,
      address2,
      zipCode,
      addressType,
    }: {
      country: string;
      city: string;
      address1: string;
      address2: string;
      zipCode: string;
      addressType: string;
    },
    { dispatch }
  ) => {
    try {
      dispatch(updateUserAddressRequest());

      const { data } = await axios.put(
        `${server}/api/users/address`,
        {
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch(
        updateUserAddressSuccess({
          successMessage: "User address updated successfully!",
          user: data.user,
        })
      );
      return data.user;
    } catch (error: unknown) {
      dispatch(
        updateUserAddressFailed(
          error.response?.data?.message || "Failed to update address"
        )
      );
      throw error;
    }
  }
);

export const deleteUserAddress = createAsyncThunk(
  "user/deleteAddress",
  async (id: string, { dispatch }) => {
    try {
      dispatch(deleteUserAddressRequest());

      const { data } = await axios.delete(`${server}/api/users/address/${id}`, {
        withCredentials: true,
      });

      dispatch(
        deleteUserAddressSuccess({
          successMessage: "User address deleted successfully!",
          user: data.user,
        })
      );
      return data.user;
    } catch (error: unknown) {
      dispatch(
        deleteUserAddressFailed(
          error.response?.data?.message || "Failed to delete address"
        )
      );
      throw error;
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { dispatch }) => {
    try {
      dispatch(getAllUsersRequest());

      const { data } = await axios.get(`${server}/api/users/admin/all`, {
        withCredentials: true,
      });

      dispatch(getAllUsersSuccess(data.users));
      return data.users;
    } catch (error: unknown) {
      dispatch(
        getAllUsersFailed(
          error.response?.data?.message || "Failed to get all users"
        )
      );
      throw error;
    }
  }
);
