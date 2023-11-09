import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatalog } from "../service/Api";

export const getCarThunk = createAsyncThunk(
  "cars/getCarThunk",

  async (carsData, thunkAPI) => {
    try {
      const response = await fetchCatalog();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
