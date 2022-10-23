import { createSlice } from "@reduxjs/toolkit";

const userLecturesSlice = createSlice({
  name: "userLectures",
  initialState: {
    userLectures: [],
  },
  reducers: {
    changeUserLectures(state, action) {
      state.userLectures.push(action.payload.userLectures);
    },
  },
});

export const userLecturesActions = userLecturesSlice.actions;
export const userLecturesReducer = userLecturesSlice.reducer;
