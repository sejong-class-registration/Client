import { createSlice } from "@reduxjs/toolkit";

const userScheduleSlice = createSlice({
  name: "userSchedule",
  initialState: {
    userSchedule: {},
  },
  reducers: {
    changeUserSchedule(state, action) {
      state.userSchedule = action.payload.userSchedule;
    },
  },
});

export const userScheduleActions = userScheduleSlice.actions;
export const userScheduleReducer = userScheduleSlice.reducer;
