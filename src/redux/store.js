import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { checkboxReducer } from "./slice/checkboxSlice";
import { selectedLecReducer } from "./slice/selectedLecSlice";
import { classFilterReducer } from "./slice/classFilterSlice";
import { userInfoReducer } from "./slice/userSlice";
import { sortFilterReducer } from "./slice/sortFilterSlice";
import { isOpenModalReducer } from "./slice/isOpenModalSlice";
import { userScheduleReducer } from "./slice/userScheduleSlice";
import { userLecturesReducer } from "./slice/userLecturesSlice";
import { filteredLectureReducer } from "./slice/filteredLectureSlice";
import { isFetchingReducer } from "./slice/isFetchingSlice";
import { persistReducer } from "redux-persist";
import { excelFileReducer } from "./slice/excelfileSlice";
import storage from "redux-persist/lib/storage";
import { recommendedLecturesSliceReducer } from "./slice/recommendedLecturesSlice";
import { scheduleNumReducer } from "./slice/scheduleNumSlice";
import { graduateLectureSliceReducer } from "./slice/graduateLecture";
import { takenCheckBoxReducer } from "./slice/takenCheckBoxSlice";
import { cartCheckBoxReducer } from "./slice/cartCheckBoxSlice";
import { hoverTimeReducer } from "./slice/hoverTime";
import { memoListReducer } from "./slice/memoList";

const reducers = combineReducers({
  checkbox: checkboxReducer,
  selectedLec: selectedLecReducer,
  classFilterModal: classFilterReducer,
  userInfo: userInfoReducer,
  classFilter: classFilterReducer,
  sortFilter: sortFilterReducer,
  isOpenModal: isOpenModalReducer,
  userSchedule: userScheduleReducer,
  userLectures: userLecturesReducer,
  filteredLecture: filteredLectureReducer,
  isFetching: isFetchingReducer,
  scheduleNum: scheduleNumReducer,
  recommendedLecture: recommendedLecturesSliceReducer,
  graduateLecture: graduateLectureSliceReducer,
  takenCheckBox: takenCheckBoxReducer,
  cartCheckBox: cartCheckBoxReducer,
  hoverTime : hoverTimeReducer,
  memoList : memoListReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userInfo", "excelFile"], //여기에만 persistredux 적용
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
