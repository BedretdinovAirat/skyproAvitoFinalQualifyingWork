import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseAds = "http://localhost:8090/";
export const advApi = createApi({
  reducerPath: "advApi",
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
} = advApi;
