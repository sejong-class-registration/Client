import { createSlice } from "@reduxjs/toolkit";

const memoListSlice = createSlice({
  name: "memoList",
  initialState: [
    { num: 1, name: "1학년 1학기", content: "", color: "#FFF2CC" },
    { num: 2, name: "1학년 2학기", content: "", color: "#FFF2CC" },
    { num: 3, name: "2학년 1학기", content: "", color: "#FFD966" },
    { num: 4, name: "2학년 2학기", content: "", color: "#FFD966" },
    { num: 5, name: "3학년 1학기", content: "", color: "#F4B183" },
    { num: 6, name: "3학년 1학기", content: "", color: "#F4B183" },
    { num: 7, name: "4학년 1학기", content: "", color: "#DFA67B" },
    { num: 8, name: "4학년 1학기", content: "", color: "#DFA67B" },
    { num: 9, name: "여름 계절학기", content: "", color: "#9e8c8c" },
    { num: 10, name: "겨울 계절학기", content: "", color: "#9e8c8c" },
    { num: 11, name: "ETC", content: "", color: "#ccc" },
  ],
  reducers: {
    changeMemoList(state, action) {
    },
    saveMemoContent(state, action) {
    },
  },
});

export const memoListActions = memoListSlice.actions;
export const memoListReducer = memoListSlice.reducer;
