import { createSlice } from "@reduxjs/toolkit";

const sortFilterSlice = createSlice({
  name: "sortFilter",
  initialState: {
    sortFilter: "",
  },
  reducers: {
    changeSortFilter(state, action) {
      state.sortFilter = action.payload.sortFilter;
    },
  },
});

export const sortFilterActions = sortFilterSlice.actions;
export const sortFilterReducer = sortFilterSlice.reducer;
