import { configureStore } from '@reduxjs/toolkit';
import { checkboxReducer } from './slice/checkboxSlice';

const store = configureStore({
  reducer: {checkbox: checkboxReducer, }
})

export default store;