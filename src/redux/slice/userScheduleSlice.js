import { createSlice } from "@reduxjs/toolkit";

const userScheduleSlice = createSlice({
  name: "userSchedule",
  initialState: {
    lectureList: [],
  },
  reducers: {
    changeUserSchedule(state, action) {
      state.lectureList = action.payload.lectureList;
    },
  },
});

export const userScheduleActions = userScheduleSlice.actions;
export const userScheduleReducer = userScheduleSlice.reducer;
