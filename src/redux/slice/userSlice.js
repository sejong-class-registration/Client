import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {
      name: '',
      studentId: '',
      userGrade: '',
      major: '',
      dobuleMajor: '',
    }
  },
  reducers: {
    clearUserInfo(state) {
      state.userInfo = {
        name: '',
        studentId: '',
        userGrade: '',
        major: '',
        dobuleMajor: '',
      }
    },
    saveUserInfo(state, action) {
      state.userInfo = action.payload.userInfo;
    }
  },
});

export const userInfoActions = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;