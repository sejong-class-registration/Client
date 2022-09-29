import { createSlice } from "@reduxjs/toolkit";

const checkboxSlice = createSlice({
  name: "checkboxList",
  initialState: { grades: [ ], selection: [ ]},
  reducers: {
    save(state, action) {
      state.grades = action.payload.grades;
      state.selection = action.payload.selection;
    },
  },
});

export const checkboxActions = checkboxSlice.actions;
export const checkboxReducer = checkboxSlice.reducer;
