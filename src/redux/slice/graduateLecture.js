import { createSlice } from "@reduxjs/toolkit";

const graduateLectureSlice = createSlice({
  name: "graduateLecture",
  initialState: {
    graduateLecture: {
      totalGE1: [],
      takenGE1: [],
      totalGE2: [],
      takenGE2: [],
      totalGE3: [],
      takenGE3: [],
      totalMustMajorCredit: 0,
      takenMustMajorCredit: 0,
      totalMustMajor: [],
      takenMustMajor: [],
      totalSelectMajorCredit: 0,
      takenSelectMajorCredit: 0,
      totalSelectMajor: [],
      takenSelectMajor: [],
    },
  },
  reducers: {
    saveGraduateLectures(state, action) {
      state.graduateLecture = {
        totalGE1: action.payload.ge1,
        takenGE1: action.payload.takenGE1,
        totalGE2: action.payload.ge2,
        takenGE2: action.payload.takenGE2,
        totalGE3: action.payload.ge3,
        takenGE3: action.payload.takenGE3,
        totalMustMajorCredit: action.payload.major.mustTotalCredit,
        takenMustMajorCredit: action.payload.major.mustCurrentCredit,
        totalMustMajor: action.payload.major.mustMajorOpenThisSemester,
        takenMustMajor: action.payload.major.mustMajorTaken,
        totalSelectMajorCredit: action.payload.major.selectTotalCredit,
        takenSelectMajorCredit: action.payload.major.selectCurrentCredit,
        totalSelectMajor: action.payload.major.selectMajorOpenThisSemester,
        takenSelectMajor: action.payload.major.selectMajorTaken,
      };
    },
  },
});

export const graduateLectureSliceActions = graduateLectureSlice.actions;
export const graduateLectureSliceReducer = graduateLectureSlice.reducer;
