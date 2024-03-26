import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseAds = "http://localhost:8090/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseAds,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      transformErrorResponse: (error) => {
        if (error.status === 401) {
          return error.data.detail;
        }
        if (error.status === 422) {
          if (error.data.detail instanceof Array) {
            return error.data.detail[0].msg;
          }
        }
        console.log(error);
        return error.error;
      },
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
      transformErrorResponse: (error) => {
        if (error.status === 400) {
          return "Такой пользователь уже существует";
        }
        if (error.status === 422) {
          if (error.data.detail instanceof Array) {
            return error.data.detail[0].msg;
          }
        }
        console.log(error);

        return error.error;
      },
    }),
  }),
});
export const { useSignInMutation, useSignUpMutation } = authApi;
