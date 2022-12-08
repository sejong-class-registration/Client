import { createSlice } from "@reduxjs/toolkit";

const cartCheckBoxSlice = createSlice({
  name: "cartCheckBox",
  initialState: {
    cartCheckBox: false,
  },
  reducers: {
    changeCartCheckBox(state) {
      state.cartCheckBox = !state.cartCheckBox
    },
  },
});

export const cartCheckBoxActions = cartCheckBoxSlice.actions;
export const cartCheckBoxReducer = cartCheckBoxSlice.reducer;