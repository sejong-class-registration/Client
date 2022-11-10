import { createSlice } from "@reduxjs/toolkit";

const selectedScheduleNumberSlice = createSlice({
  name: "selectedScheduleNumber",
  initialState: {
    selectedScheduleNumber: 0,
  },
  reducers: {
    changeselectedScheduleNumber(state, action) {
      state.selectedScheduleNumber = action.payload.selectedScheduleNumber;
    },
  },
});

export const selectedScheduleNumberActions =
  selectedScheduleNumberSlice.actions;
export const selectedScheduleNumberReducer =
  selectedScheduleNumberSlice.reducer;
