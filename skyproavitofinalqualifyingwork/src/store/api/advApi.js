import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseAds = "http://localhost:8090/";
export const advApi = createApi({
  reducerPath: "advApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseAds,
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
  }),
});
export const {
  useGetAdQuery,
  useGetMyAdQuery,
  useGetAllAdsQuery,
  useGetAdReviewsQuery,
} = advApi;
