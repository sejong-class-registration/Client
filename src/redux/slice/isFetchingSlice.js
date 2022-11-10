import { createSlice } from "@reduxjs/toolkit";

const isFetchingSlice = createSlice({
  name: "isFetching",
  initialState: {
    isFetching: false,
  },
  reducers: {
    changeIsFetching(state) {
      state.isFetching = !state.isFetching;
    },
  },
});

export const isFetchingActions = isFetchingSlice.actions;
export const isFetchingReducer = isFetchingSlice.reducer;
