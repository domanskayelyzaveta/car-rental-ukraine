import { createSlice } from "@reduxjs/toolkit";
import { getCarThunk } from "./thunks";

const initialState = {
  carsData: [],
  selectedCars: [],
  id: null,
  isLoading: false,
  error: null,
  filter: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carsData.push(...action.payload);
        console.log(action.payload);
      })
      .addCase(getCarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carReducer = carSlice.reducer;
