import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addinitialItem: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsSliceActions = itemsSlice.actions;
