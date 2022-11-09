import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  userInfo: {
    name: "",
    studentId: "",
    userGrade: "",
    major: "",
    dobuleMajor: "",
  },
}

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    clearUserInfo(state) {
      state.userInfo = {
        name: "",
        studentId: "",
        userGrade: "",
        major: "",
        dobuleMajor: "",
      };
    },
    saveUserInfo(state, action) {
      state.userInfo = {
        name: action.payload.name,
        studentId: action.payload.studentId,
        userGrade: +action.payload.userGrade,
        major: action.payload.major,
        dobuleMajor: action.payload.doubleMajor,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  }
});

export const userInfoActions = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
