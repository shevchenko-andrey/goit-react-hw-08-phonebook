import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './auth-operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export const authReduser = authSlice.reducer;
// export const { update } = authSlice.actions;
