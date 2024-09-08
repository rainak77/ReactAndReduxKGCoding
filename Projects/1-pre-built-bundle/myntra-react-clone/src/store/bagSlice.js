import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItemToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const bagSliceActions = bagSlice.actions;
