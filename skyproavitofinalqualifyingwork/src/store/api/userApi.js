import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseAds = "http://localhost:8090/";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseAds,
    prepareHeaders: (headers, api) => {
      const { user } = api.getState();
      if (user.isAuth) {
        const accessToken = user.token.access_token;
        headers.append("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
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
export const { useLazyGetUserDataQuery, useSignInMutation, useSignUpMutation } =
  userApi;
