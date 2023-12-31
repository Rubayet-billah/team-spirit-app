import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    pageLimit: 20,
    currentPage: 1,
    totalPages: 5, // Replace with your total number of pages
  },
  reducers: {
    setPageLimit: (state, action) => {
      state.pageLimit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPageLimit, setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
