import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseAds = "http://localhost:8090/";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseAds,
  }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => "user",
    }),
    signIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    signUp: builder.mutation({
      query: ({
        email,
        password,
        city,
        name,
        surname,
        phone,
        role = "user",
      }) => ({
        url: "auth/register",
        method: "POST",
        body: {
          email,
          password,
          city,
          name,
          surname,
          phone,
          role,
        },
      }),
    }),
  }),
});
export const { useGetUserDataQuery, useSignInMutation, useSignUpMutation } =
  userApi;
