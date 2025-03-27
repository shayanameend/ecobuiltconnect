import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
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
} from "../reducers/event";
import { IEvent } from "../types";

const server = process.env.BACKEND_URL;

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
  "event/create",
  async (data: CreateEventParams, { dispatch }) => {
    try {
      dispatch(eventCreateRequest());

      const { data: responseData } = await axios.post(
        `${server}/api/events`,
        data,
        {
          withCredentials: true,
        }
      );

      dispatch(eventCreateSuccess(responseData.event));
      return responseData.event as IEvent;
    } catch (error: unknown) {
      dispatch(
        eventCreateFail(
          error.response?.data?.message || "Failed to create event"
        )
      );
      throw error;
    }
  }
);

// get all events of a shop
export const getAllEventsShop = createAsyncThunk(
  "event/getAllShopEvents",
  async (id: string, { dispatch }) => {
    try {
      dispatch(getAlleventsShopRequest());

      const { data } = await axios.get(`${server}/api/events/shop/${id}`);

      dispatch(getAlleventsShopSuccess(data.events));
      return data.events as IEvent[];
    } catch (error: unknown) {
      dispatch(
        getAlleventsShopFailed(
          error.response?.data?.message || "Failed to fetch shop events"
        )
      );
      throw error;
    }
  }
);

// delete event of a shop
export const deleteEvent = createAsyncThunk(
  "event/delete",
  async (id: string, { dispatch }) => {
    try {
      dispatch(deleteeventRequest());

      const { data } = await axios.delete(`${server}/api/events/${id}`, {
        withCredentials: true,
      });

      dispatch(deleteeventSuccess(data.message));
      return data.message;
    } catch (error: unknown) {
      dispatch(
        deleteeventFailed(
          error.response?.data?.message || "Failed to delete event"
        )
      );
      throw error;
    }
  }
);

// get all events
export const getAllEvents = createAsyncThunk(
  "event/getAll",
  async (_, { dispatch }) => {
    try {
      dispatch(getAlleventsRequest());

      const { data } = await axios.get(`${server}/api/events`);

      dispatch(getAlleventsSuccess(data.events));
      return data.events as IEvent[];
    } catch (error: unknown) {
      dispatch(
        getAlleventsFailed(
          error.response?.data?.message || "Failed to fetch events"
        )
      );
      throw error;
    }
  }
);
