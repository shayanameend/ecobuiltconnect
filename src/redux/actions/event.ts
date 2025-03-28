import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
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
} from "@/redux/reducers/event";
import { IEvent } from "@/redux/types";
import { server } from "@/lib/server";

// Define proper typing for event creation
interface CreateEventParams {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  images: string[];
  shopId: string;
}

// create event
export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (eventData: CreateEventParams, { dispatch }) => {
    try {
      dispatch(createEventRequest());

      const { data: responseData } = await axios.post(
        `${server}/api/events`,
        eventData,
        {
          withCredentials: true,
        }
      );

      dispatch(createEventSuccess(responseData.event));
      return responseData.event as IEvent;
    } catch (error: unknown) {
      dispatch(
        createEventFailure(
          error.response?.data?.message || "Failed to create event"
        )
      );
      throw error;
    }
  }
);

// get all events of a shop
export const fetchShopEvents = createAsyncThunk(
  "event/fetchShopEvents",
  async (shopId: string, { dispatch }) => {
    try {
      dispatch(fetchShopEventsRequest());

      const { data } = await axios.get(`${server}/api/events/shop/${shopId}`);

      dispatch(fetchShopEventsSuccess(data.events));
      return data.events as IEvent[];
    } catch (error: unknown) {
      dispatch(
        fetchShopEventsFailure(
          error.response?.data?.message || "Failed to fetch shop events"
        )
      );
      throw error;
    }
  }
);

// delete event of a shop
export const removeEvent = createAsyncThunk(
  "event/removeEvent",
  async (eventId: string, { dispatch }) => {
    try {
      dispatch(removeEventRequest());

      const { data } = await axios.delete(`${server}/api/events/${eventId}`, {
        withCredentials: true,
      });

      dispatch(removeEventSuccess(data.message));
      return data.message;
    } catch (error: unknown) {
      dispatch(
        removeEventFailure(
          error.response?.data?.message || "Failed to delete event"
        )
      );
      throw error;
    }
  }
);

// get all events
export const fetchAllEvents = createAsyncThunk(
  "event/fetchAllEvents",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchAllEventsRequest());

      const { data } = await axios.get(`${server}/api/events`);

      dispatch(fetchAllEventsSuccess(data.events));
      return data.events as IEvent[];
    } catch (error: unknown) {
      dispatch(
        fetchAllEventsFailure(
          error.response?.data?.message || "Failed to fetch events"
        )
      );
      throw error;
    }
  }
);
