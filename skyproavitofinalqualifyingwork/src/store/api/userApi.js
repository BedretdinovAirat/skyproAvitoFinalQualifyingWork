import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { removeAuth, setAuth } from "../slices/userSlice";
const baseAds = "http://localhost:8090";
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
  console.log(result?.meta?.response?.status);
  if (result?.meta?.response?.status !== 401) {
    return result;
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    api.dispatch(removeAuth());
    window.location.href = `${baseURL}/signin`;
  };

  try {
    const { token } = api.getState().user;
    if (!token) {
      logout();
      return;
    }

    const { access_token, refresh_token } = token;

    if (!access_token || !refresh_token) {
      logout();
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
      logout();
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
      logout();
      return;
    }
    console.log(retryResult);
    return retryResult;
  } catch (err) {
    return err;
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
    }),
  }),
});
export const {
  useLazyGetUserDataQuery,
  useUpdateUserInfoMutation,
  useChangeAvatarMutation,
} = userApi;
