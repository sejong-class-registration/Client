import { createSlice } from "@reduxjs/toolkit";

const filteredLectureSlice = createSlice({
  name: "filteredLecture",
  initialState: {
    filteredLecture: [],
  },
  reducers: {
    changefilteredLecture(state, action) {
      state.filteredLecture = action.payload.filteredLecture;
    },
  },
});

export const filteredLectureActions = filteredLectureSlice.actions;
export const filteredLectureReducer = filteredLectureSlice.reducer;
