import { configureStore } from "@reduxjs/toolkit";
import { checkboxReducer } from "./slice/checkboxSlice";
import { selectedLecReducer } from "./slice/selectedLecSlice";
import { classFilterReducer } from "./slice/classFilterSlice";
import { sortFilterReducer } from "./slice/sortFilterSlice";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    selectedLec: selectedLecReducer,
    classFilter: classFilterReducer,
    sortFilter: sortFilterReducer
  },
});

export default store;
