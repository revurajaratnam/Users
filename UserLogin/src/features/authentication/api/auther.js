import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signInApi = createApi({
  reducerPath: "signInApi",
  baseQuery : fetchBaseQuery({
    baseUrl: "http://localhost:6500"
  }),
  endpoints: (builder) => ({
    SignInUser: builder.mutation({
      query: (userData) => ({
        url: "/signin",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const {useSignInUserMutation } = signInApi;