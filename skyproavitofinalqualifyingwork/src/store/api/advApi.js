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
export const advApi = createApi({
  reducerPath: "advApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => "ads",
    }),
    getMyAd: builder.query({
      query: () => "ads/me",
    }),
    getAd: builder.query({
      query: ({ id }) => `ads/${id}`,
    }),
    getAdReviews: builder.query({
      query: ({ id }) => `ads/${id}/comments`,
    }),
    getSellers: builder.query({
      query: () => "user/all",
    }),
    getAdSeller: builder.query({
      query: ({ user_id }) => `ads?user_id=${user_id}`,
    }),
    createTextAd: builder.mutation({
      query: ({ title, description, price }) => ({
        url: "adstext",
        method: "POST",
        body: {
          title,
          description,
          price,
        },
      }),
    }),
    createAd: builder.mutation({
      query: ({ title, price, description, images }) => ({
        url: `/ads?title=${title}&price=${price}&description=${description}`,
        method: "POST",
        body: images,
      }),
    }),
    deleteImg: builder.mutation({
      query: ({ id, url }) => ({
        url: `/ads/${id}/image?file_url=${url}`,
        method: "DELETE",
      }),
    }),
    addImage: builder.mutation({
      query: ({ id, image }) => ({
        url: `/ads/${id}/image`,
        method: "POST",
        body: image,
      }),
    }),
    editAd: builder.mutation({
      query: ({ title, description, price, id }) => ({
        url: `/ads/${id}`,
        method: "PATCH",
        body: {
          title,
          description,
          price,
        },
      }),
    }),
  }),
});
export const {
  useGetAdQuery,
  useGetMyAdQuery,
  useGetAllAdsQuery,
  useGetAdReviewsQuery,
  useGetSellersQuery,
  useGetAdSellerQuery,
  useCreateTextAdMutation,
  useCreateAdMutation,
  useDeleteImgMutation,
  useAddImageMutation,
  useEditAdMutation,
} = advApi;
