import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    increment: (currentState) => {
      currentState.counterValue++;
      console.log(currentState);
    },
    decrement: (currentState, action) => {
      currentState.counterValue--;
    },
    add: (currentState, action) => {
      currentState.counterValue += Number(action.payload.num);
    },
    subtract: (currentState, action) => {
      currentState.counterValue -= Number(action.payload.num);
    },
  },
});

export const counterActions = counterSlice.actions;
