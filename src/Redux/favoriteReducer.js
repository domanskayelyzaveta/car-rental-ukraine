import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { setFavorites, removeFromFavorites } = favoriteSlice.actions;
