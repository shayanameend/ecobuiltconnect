import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "@/redux/types";

interface UserAddressPayload {
  successMessage: string;
  user: IUser;
}

const initialState: IUserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    loadUserFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    updateUserInfoRequest: (state) => {
      state.loading = true;
    },
    updateUserInfoSuccess: (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.user = action.payload;
    },
    updateUserInfoFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateUserAddressRequest: (state) => {
      state.addressloading = true;
    },
    updateUserAddressSuccess: (
      state,
      action: PayloadAction<UserAddressPayload>
    ) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    },
    updateUserAddressFailed: (state, action: PayloadAction<string>) => {
      state.addressloading = false;
      state.error = action.payload;
    },

    deleteUserAddressRequest: (state) => {
      state.addressloading = true;
    },
    deleteUserAddressSuccess: (
      state,
      action: PayloadAction<UserAddressPayload>
    ) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    },
    deleteUserAddressFailed: (state, action: PayloadAction<string>) => {
      state.addressloading = false;
      state.error = action.payload;
    },

    getAllUsersRequest: (state) => {
      state.usersLoading = true;
    },
    getAllUsersSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.usersLoading = false;
      state.users = action.payload;
    },
    getAllUsersFailed: (state, action: PayloadAction<string>) => {
      state.usersLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
    clearMessages: (state) => {
      state.successMessage = null;
    },
  },
});

export const {
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
  clearErrors,
  clearMessages,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
