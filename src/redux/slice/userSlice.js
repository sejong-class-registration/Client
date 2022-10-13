import { createSlice } from "@reduxjs/toolkit";

const userScheduleSlice = createSlice({
  name: "userSchedule",
  initialState: {
    schedule: {},
  },
  reducers: {
    changeSchedule(state, action){
        state.schedule = action.payload.schedule;
    }
  },
});

export const userScheduleActions = userScheduleSlice.actions;
export const userScheduleReducer = userScheduleSlice.reducer;
