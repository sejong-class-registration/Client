import { createSlice } from "@reduxjs/toolkit";

const checkboxSlice = createSlice({
  name: "checkboxList",
  initialState: {
    grades: ["1g", "2g", "3g"],
    selection: ["1s", "2s", "3s", "4s", "5s", "6s"],
  },
  reducers: {
    save(state, action) {
      state.grades = action.payload.grades;
      state.selection = action.payload.selection;
    },
  },
});

export const checkboxActions = checkboxSlice.actions;
export const checkboxReducer = checkboxSlice.reducer;
