import { createSlice } from "@reduxjs/toolkit";

const takenCheckBoxSlice = createSlice({
  name: "takenCheckBox",
  initialState: {
    takenCheckBox: true,
  },
  reducers: {
    changeTakenCheckBox(state) {
      state.takenCheckBox = !state.takenCheckBox
    },
  },
});

export const takenCheckBoxActions = takenCheckBoxSlice.actions;
export const takenCheckBoxReducer = takenCheckBoxSlice.reducer;