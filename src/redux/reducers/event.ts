import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEventState, IEvent } from "../types";

const initialState: IEventState = {
  isLoading: true,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    createEventRequest: (state) => {
      state.isLoading = true;
    },
    createEventSuccess: (state, action: PayloadAction<IEvent>) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    },
    createEventFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    fetchShopEventsRequest: (state) => {
      state.isLoading = true;
    },
    fetchShopEventsSuccess: (state, action: PayloadAction<IEvent[]>) => {
      state.isLoading = false;
      state.events = action.payload;
    },
    fetchShopEventsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    removeEventRequest: (state) => {
      state.isLoading = true;
    },
    removeEventSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    removeEventFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    fetchAllEventsRequest: (state) => {
      state.isLoading = true;
    },
    fetchAllEventsSuccess: (state, action: PayloadAction<IEvent[]>) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    },
    fetchAllEventsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  createEventRequest,
  createEventSuccess,
  createEventFailure,
  fetchShopEventsRequest,
  fetchShopEventsSuccess,
  fetchShopEventsFailure,
  removeEventRequest,
  removeEventSuccess,
  removeEventFailure,
  fetchAllEventsRequest,
  fetchAllEventsSuccess,
  fetchAllEventsFailure,
  clearErrors,
} = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
