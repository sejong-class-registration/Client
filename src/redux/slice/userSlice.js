import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {
      name: "",
      studentId: "",
      userGrade: "",
      department: "",
      major: "",
      doubleMajor: "",
      recommendLecture: [],
      takenLectures: [],
      geArea: [],
      geAreaTaken: [],
      totalCredits: 0,
    },
  },
  reducers: {
    clearUserInfo(state) {
      state.userInfo = {
        name: "",
        studentId: "",
        userGrade: "",
        department: "",
        major: "",
        doubleMajor: "",
        recommendLecture: [],
        takenLectures: [],
        geArea: [],
        geAreaTaken: [],
        totalCredits: 0,
      };
    },
    saveDepartment(state, action){
      state.userInfo = {
        ...state.userInfo,
        department: action.payload,
      }
    },
    saveUserInfo(state, action) {
      state.userInfo = {
        name: action.payload.name,
        studentId: action.payload.studentId,
        userGrade: +action.payload.userGrade,
        major: action.payload.major,
        doubleMajor: action.payload.doubleMajor,
        recommendLecture: action.payload.recommendLecture,
        takenLectures: action.payload.takenLectures,
        geArea: action.payload.geArea,
        geAreaTaken: action.payload.geAreaTaken,
        totalCredits: action.payload.totalCredits,
      };
    },
    saveUserGraduation(state, action){
      state.userInfo = {
        ...state.userInfo,
        recommendLecture: action.payload.recommendLecture,
        takenLectures: action.payload.takenLectures,
        geArea: action.payload.geArea,
        geAreaTaken: action.payload.geAreaTaken,
        totalCredits: action.payload.totalCredit
      }
    }
  },
});

export const userInfoActions = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
