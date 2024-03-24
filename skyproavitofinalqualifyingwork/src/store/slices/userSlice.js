import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: !!localStorage.getItem("user") ?? false,
  token: JSON.parse(localStorage.getItem("token")) ?? false,
  user: JSON.parse(localStorage.getItem("user")) ?? false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { isAuth, token } = action.payload;
      state.isAuth = isAuth;
      state.token = token;
    },
    removeAuth: (state) => {
      state.isAuth = false;
      state.token = { access_token: null, refresh_token: null };
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setAuth, removeAuth, setUserData } = userSlice.actions;
export default userSlice.reducer;
