import { createSlice } from "@reduxjs/toolkit";

const checkboxSlice = createSlice({
  name: "checkboxList",
  initialState: {
    grades: [true, true, true],
    selection: [true, true, true, true, true, true, false],
  },
  reducers: {
    gradeChecked(state, action){
      state.grades[action.payload] = !state.grades[action.payload];
    },    
    selectionChecked(state, action){
      state.selection[action.payload] = !state.selection[action.payload];
    },
  },
});

export const checkboxActions = checkboxSlice.actions;
export const checkboxReducer = checkboxSlice.reducer;
