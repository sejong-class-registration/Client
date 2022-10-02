import { createSlice } from "@reduxjs/toolkit";

const classModalSlice = createSlice({
  name: "classModalState",
  initialState: { isOpen: true },
  reducers: {
    openAndClose(state, action) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const classModalActions = classModalSlice.actions;
export const classModalReducer = classModalSlice.reducer;
