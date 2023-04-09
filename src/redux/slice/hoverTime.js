import { createSlice } from "@reduxjs/toolkit";

const hoverTimeSlice = createSlice({
  name: "hoverTime",
  initialState: {
    day: [],
    startTime: 0,
    endTime: 0,
  },
  reducers: {
    updateHoverTime(state, action) {
      state.day = action.payload.day;
      state.startTime = action.payload.startTime;
      state.endTime = action.payload.endTime;
    },
    clearHoverTime(state){
      state.day = [];
      state.startTime = 0;
      state.endTime = 0;
    },
  },
});

export const hoverTimeActions = hoverTimeSlice.actions;
export const hoverTimeReducer = hoverTimeSlice.reducer;
