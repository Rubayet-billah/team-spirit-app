import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});
export const { useGetUserByIdQuery } = userApi;
