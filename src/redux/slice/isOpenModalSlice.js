import { createSlice } from "@reduxjs/toolkit";

const isOpenModalSlice = createSlice({
  name: "isOpenModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    changeIsOpen(state) {
        state.isOpen = !state.isOpen;
    },
  },
});

export const isOpenModalActions = isOpenModalSlice.actions;
export const isOpenModalReducer = isOpenModalSlice.reducer;
