import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchDone: false, // false: 'PENDING' or true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    setFetchDone: (state) => {
      state.fetchDone = true;
    },
    setFetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    setFetchFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
