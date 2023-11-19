import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchTerm: "",
    filterBy: "domain",
    sortBy: "name",
    sortOrder: "asc",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSearchTerm, setFilterBy, setSortBy, setSortOrder } =
  filterSlice.actions;
export default filterSlice.reducer;
