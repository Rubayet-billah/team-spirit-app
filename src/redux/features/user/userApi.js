import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: (queryParams) => ({
        url: "/users",
        params: queryParams,
      }),
      providesTags: ["USER"],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["USER"],
    }),
    createUser: build.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    updateUser: build.mutation({
      query: ({ id, userData }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["USER"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USER"],
    }),
    getAllDomains: build.query({
      query: () => ({
        url: "/users/get-domains",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetSingleUserQuery,
  useGetAllDomainsQuery,
} = userApi;
