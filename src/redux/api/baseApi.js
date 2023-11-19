import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://team-spirit-server.vercel.app";
const localUrl = "http://localhost:5000";
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: () => ({}),
});
