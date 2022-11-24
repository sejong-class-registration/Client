import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {
      name: "",
      studentId: "",
      userGrade: "",
      major: "",
      dobuleMajor: "",
      recommendLecture: [],
    },
  },
  reducers: {
    clearUserInfo(state) {
      state.userInfo = {
        name: "",
        studentId: "",
        userGrade: "",
        major: "",
        doubleMajor: "",
      };
    },
    saveUserInfo(state, action) {
      state.userInfo = {
        name: action.payload.name,
        studentId: action.payload.studentId,
        userGrade: +action.payload.userGrade,
        major: action.payload.major,
        dobuleMajor: action.payload.doubleMajor,
        recommendLecture: action.payload.recommendLecture,
      };
    },
  },
});

export const userInfoActions = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
