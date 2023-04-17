import { createSlice } from "@reduxjs/toolkit";

const memoListSlice = createSlice({
  name: "memoList",
  initialState: {
    num: 11,
    name: '1학년 1학기',
    content: '',
    color: '#FFF2CC'
  },
  reducers: {
    changeMemoList(state, action) {
        state.num = action.payload.id;
        state.name = action.payload.name;
        state.color = action.payload.value;
    },
  },
});

export const memoListActions = memoListSlice.actions;
export const memoListReducer = memoListSlice.reducer;
