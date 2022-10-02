import { configureStore } from "@reduxjs/toolkit";
import { checkboxReducer } from "./slice/checkboxSlice";
import { selectedIdReducer } from "./slice/selectedIdSlice";
import { classModalReducer } from "./slice/classModalSlice";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    selectedId: selectedIdReducer,
    classModal: classModalReducer,
  },
});

export default store;
