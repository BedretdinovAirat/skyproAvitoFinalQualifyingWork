import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { advApi } from "./api/advApi";
import { userApi } from "./api/userApi";
export const store = configureStore({
  reducer: {
    user: userSlice,
    [advApi.reducerPath]: advApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (middlewares) =>
    middlewares().concat([advApi.middleware, userApi.middleware]),
});
