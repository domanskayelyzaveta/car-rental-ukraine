import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCatalog, fetchCatalog } from "../service/Api";

export const getCarThunk = createAsyncThunk(
  "cars/getCarThunk",
  async (page, thunkAPI) => {
    try {
      const response = await fetchCatalog(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCarThunk = createAsyncThunk(
  "cars/getAllCarThunk",
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllCatalog();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
