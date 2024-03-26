import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./userApi";

// дополнительный код рефреш

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
    postAdReviews: builder.mutation({
      query: ({ id, text }) => ({
        url: `/ads/${id}/comments`,
        method: "POST",
        body: {
          text,
        },
      }),
    }),
    deleteAd: builder.mutation({
      query: ({ id }) => ({
        url: `/ads/${id}`,
        method: "DELETE",
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
  usePostAdReviewsMutation,
  useDeleteAdMutation,
} = advApi;
