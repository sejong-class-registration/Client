import { createSlice } from "@reduxjs/toolkit";

const scheduleNumSlice = createSlice({
  name: "scheduleNum",
  initialState: {
    scheduleNum: 0,
  },
  reducers: {
    changeScheduleNum(state, action) {
      state.scheduleNum = action.payload.scheduleNum;
    },
  },
});

export const scheduleNumActions = scheduleNumSlice.actions;
export const scheduleNumReducer = scheduleNumSlice.reducer;
