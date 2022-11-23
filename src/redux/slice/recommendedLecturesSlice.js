import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const recommendedLecturesSlice = createSlice({
  name: "recommendedLecturesSlice",
  initialState: {
    lecturesList: [{_id: 1, name: '', lectureId: 0, area: '', credit: 0, recommendNumber: 0}],
  },

  
  reducers: {
    getRecommendedLecture(state, action) {
      state.lecturesList = action.payload
    },
  },
});

export const recommendedLecturesSliceActions = recommendedLecturesSlice.actions;
export const recommendedLecturesSliceReducer = recommendedLecturesSlice.reducer;
