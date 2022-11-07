import { createSlice } from "@reduxjs/toolkit";

const selectedLecSlice = createSlice({
  name: "selectedLec",
  initialState: {
    selectedLec: {
      key: "",
      classification: "",
      credit: "",
      dayAndTime: "",
      department: "",
      distrib: "",
      english: "",
      lectureGrade: "",
      lectureId: "",
      name: "",
      notice: "",
      profName: "",
      recommend: "",
      room: "",
      id: "",
    },
  },
  reducers: {
    changeSelectedLec(state, action) {
      state.selectedLec = action.payload.selectedLec;
    },
  },
});

export const selectedLecActions = selectedLecSlice.actions;
export const selectedLecReducer = selectedLecSlice.reducer;
