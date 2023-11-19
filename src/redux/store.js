// store.js
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import paginationSlice from "./features/pagination/paginationSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    pagination: paginationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
