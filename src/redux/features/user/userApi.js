import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/users",
      }),
    }),
    getAllUsers: build.query({
      query: (queryParams) => ({
        url: "/users",
        params: queryParams,
      }),
    }),
  }),
});
export const { useGetUsersQuery, useGetAllUsersQuery } = userApi;
