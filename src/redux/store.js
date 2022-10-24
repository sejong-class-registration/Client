import { configureStore } from "@reduxjs/toolkit";
import { checkboxReducer } from "./slice/checkboxSlice";
import { selectedLecReducer } from "./slice/selectedLecSlice";
import { classFilterReducer } from "./slice/classFilterSlice";
import { sortFilterReducer } from "./slice/sortFilterSlice";
import { isOpenModalReducer } from "./slice/isOpenModalSlice";
import { userScheduleReducer } from "./slice/userScheduleSlice";
import { userLecturesReducer } from "./slice/userLecturesSlice";
import { filteredLectureReducer } from "./slice/filteredLectures";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    selectedLec: selectedLecReducer,
    classFilter: classFilterReducer,
    sortFilter: sortFilterReducer,
    isOpenModal: isOpenModalReducer,
    userSchedule: userScheduleReducer,
    userLectures: userLecturesReducer,
    filteredLecture: filteredLectureReducer,
  },
});

export default store;
