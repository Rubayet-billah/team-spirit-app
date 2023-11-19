// store.js
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import paginationSlice from "./features/pagination/paginationSlice";
import filterSlice from "./features/filter/filterSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    pagination: paginationSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
