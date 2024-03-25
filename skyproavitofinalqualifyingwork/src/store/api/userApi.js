import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuth } from "../slices/userSlice";
const baseAds = "http://localhost:8090/";
const baseURL = "http://localhost:3000";

// дополнительный код рефреш
export const baseQueryWithReauth = async (args, api, options) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: baseAds,
    prepareHeaders: (headers, api) => {
      const { user } = api.getState();
      if (user.isAuth) {
        const accessToken = user.token.access_token;
        headers.append("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  });
  const result = await baseQuery(args, api, options);
  if (result.data) {
    return result;
  }
  if (result?.error?.status === 401) {
    const { token } = api.getState().user;
    if (!token) {
      window.location.href = `${baseURL}/signin`;
      return;
    }
    const { access_token, refresh_token } = token;
    console.log(access_token, refresh_token);
    if (!access_token || !refresh_token) {
      window.location.href = `${baseURL}/signin`;
      return;
    }

    const resultAuth = await baseQuery(
      {
        url: `${baseAds}/auth/login`,
        method: "PUT",
        body: {
          access_token,
          refresh_token,
        },
      },
      api,
      options
    );
    if (resultAuth?.error) {
      window.location.href = `${baseURL}/signin`;
      return;
    }
    api.dispatch(
      setAuth({
        isAuth: true,
        token: resultAuth.data,
      })
    );
    localStorage.setItem("token", JSON.stringify(resultAuth.data));
    const retryResult = await baseQuery(args, api, options);
    if (retryResult?.error?.status === 401) {
      window.location.href = `${baseURL}/signin`;
      return;
    }
    return retryResult;
  } else {
    return result;
  }
};
// мой код
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
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
      transformErrorResponse: (error) => {
        if (error.status === 401) {
          return error.data.detail;
        }
        if (error.status === 422) {
          if (error.data.detail instanceof Array) {
            return error.data.detail[0].msg;
          }
        }
        return error;
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
        return error;
      },
    }),
    updateUserInfo: builder.mutation({
      query: ({ name, surname, email, city, phone, role = "user" }) => ({
        url: "/user",
        method: "PATCH",
        body: {
          name,
          surname,
          email,
          city,
          phone,
          role,
        },
      }),
    }),
    changeAvatar: builder.mutation({
      query: ({ file }) => ({
        url: "/user/avatar",
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const {
  useLazyGetUserDataQuery,
  useSignInMutation,
  useSignUpMutation,
  useUpdateUserInfoMutation,
  useChangeAvatarMutation,
} = userApi;
