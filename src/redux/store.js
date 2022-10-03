import { configureStore } from "@reduxjs/toolkit";
import { checkboxReducer } from "./slice/checkboxSlice";
import { selectedLecReducer } from "./slice/selectedLecSlice";
import { classFilterReducer } from "./slice/classFilterSlice";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    selectedLec: selectedLecReducer,
    classFilterModal: classFilterReducer,
  },
});

export default store;
