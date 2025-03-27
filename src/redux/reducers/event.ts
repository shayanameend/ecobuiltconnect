import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEventState, IEvent } from "../types";

const initialState: IEventState = {
  isLoading: true,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventCreateRequest: (state) => {
      state.isLoading = true;
    },
    eventCreateSuccess: (state, action: PayloadAction<IEvent>) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    },
    eventCreateFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    getAlleventsShopRequest: (state) => {
      state.isLoading = true;
    },
    getAlleventsShopSuccess: (state, action: PayloadAction<IEvent[]>) => {
      state.isLoading = false;
      state.events = action.payload;
    },
    getAlleventsShopFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteeventRequest: (state) => {
      state.isLoading = true;
    },
    deleteeventSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    deleteeventFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getAlleventsRequest: (state) => {
      state.isLoading = true;
    },
    getAlleventsSuccess: (state, action: PayloadAction<IEvent[]>) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    },
    getAlleventsFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  eventCreateRequest,
  eventCreateSuccess,
  eventCreateFail,
  getAlleventsShopRequest,
  getAlleventsShopSuccess,
  getAlleventsShopFailed,
  deleteeventRequest,
  deleteeventSuccess,
  deleteeventFailed,
  getAlleventsRequest,
  getAlleventsSuccess,
  getAlleventsFailed,
  clearErrors,
} = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
