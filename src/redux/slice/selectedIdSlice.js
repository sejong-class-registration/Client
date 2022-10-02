import { createSlice } from "@reduxjs/toolkit";

const selectedIdSlice = createSlice({
  name: "selectedId",
  initialState: { selectedId: "" },
  reducers: {
    changeSelectedId(state, action) {
      state.selectedId = action.selectedId;
    },
  },
});

export const selectedIdActions = selectedIdSlice.actions;
export const selectedIdReducer = selectedIdSlice.reducer;
