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
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


// const reducers = combineReducers({
//   reducer: {
//     checkbox: checkboxReducer,
//     selectedLec: selectedLecReducer,
//     classFilterModal: classFilterReducer,
//     userInfo: userInfoReducer,
//     classFilter: classFilterReducer,
//     sortFilter: sortFilterReducer,
//     isOpenModal: isOpenModalReducer,
//     userSchedule: userScheduleReducer,
//     userLectures: userLecturesReducer,
//     filteredLecture: filteredLectureReducer,
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
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
      },
});

export default store;
