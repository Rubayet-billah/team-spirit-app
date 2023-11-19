import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchTerm: undefined,
    domain: undefined,
    gender: undefined,
    available: undefined,
    sortBy: undefined,
    sortOrder: "asc",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDomain: (state, action) => {
      state.domain = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAvailability: (state, action) => {
      state.available = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setDomain,
  setGender,
  setAvailability,
  setSortBy,
  setSortOrder,
} = filterSlice.actions;

export default filterSlice.reducer;
