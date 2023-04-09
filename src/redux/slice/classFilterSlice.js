import { createSlice } from "@reduxjs/toolkit";

const classFilterSlice = createSlice({
  name: "classFilter",
  initialState: {
    classFilter: {
      department: "",
      name: "",
      profName: "",
      classification: "",
      lectureId: "",
      grade: "",
    },
  },
  reducers: {
    changeClassFilter(state, action) {
      state.classFilter = action.payload.classFilter;
    },
  },
});

export const classFilterActions = classFilterSlice.actions;
export const classFilterReducer = classFilterSlice.reducer;
