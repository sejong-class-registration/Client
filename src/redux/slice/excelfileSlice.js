import { createSlice } from "@reduxjs/toolkit";

const excelFileSlice = createSlice({
  name: "userInfo",
  initialState: {
    excelFile: {
      isUploaded: false,
    },
  },
  reducers: {
    clearExcelFile(state) {
      state.userInfo = {
        isUploaded: false,
      };
    },
    uploadExcelfile(state) {
      state.userInfo = {
        isUploaded: true,
      };
    },
  },
});

export const excelFileactions = excelFileSlice.actions;
export const excelFileReducer = excelFileSlice.reducer;