import { createSlice } from "@reduxjs/toolkit";
// 26.03.2024
const checkLSParse = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const initialState = {
  isAuth: !!checkLSParse("token"),
  token: checkLSParse("token"),
  user: checkLSParse("user"),
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
      state.token = null;
      state.user = null;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setAuth, removeAuth, setUserData } = userSlice.actions;
export default userSlice.reducer;
