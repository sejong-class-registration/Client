import { configureStore } from "@reduxjs/toolkit";
import { checkboxReducer } from "./slice/checkboxSlice";
import { selectedLecReducer } from "./slice/selectedLecSlice";
import { classFilterReducer } from "./slice/classFilterSlice";
import { sortFilterReducer } from "./slice/sortFilterSlice";
import { isOpenModalReducer } from "./slice/isOpenModalSlice";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    selectedLec: selectedLecReducer,
    classFilter: classFilterReducer,
    sortFilter: sortFilterReducer,
    isOpenModal: isOpenModalReducer,
  },
});

export default store;
