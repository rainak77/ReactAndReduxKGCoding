import { createSlice } from "@reduxjs/toolkit";

export const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (currentState) => !currentState,
  },
});

export const privacyActions = privacySlice.actions;
