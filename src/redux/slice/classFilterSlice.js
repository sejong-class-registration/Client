import { createSlice } from "@reduxjs/toolkit";

const classFilterSlice = createSlice({
  name: "classFilter",
  initialState: {
    classFilter: { department: "컴퓨터공학과", name: "", profName: "", classification: "" },
  },
  reducers: {
    changeClassFilter(state, action) {
      state.classFilter = action.payload.classFilter;
    },
  },
});

export const classFilterActions = classFilterSlice.actions;
export const classFilterReducer = classFilterSlice.reducer;
