import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./action";

const initialState = {
  login: {
    status: 'INITIAL',
    refresh: '',
    access: '',
    message: '',
  },
  signup: {
    status: 'INITIAL',
    message: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.login.access = '';
      state.login.refresh = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.status = 'SUCCESS';
        state.login.access = action.payload.access;
        localStorage.setItem('access', action.payload.access); 
        state.login.refresh = action.payload.refresh;
        localStorage.setItem('refresh', action.payload.refresh); 
      })
      .addCase(loginUser.pending, (state) => {
        state.login.status = 'LOADING';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.status = 'ERROR';
        state.login.message = action.payload;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.signup.status = 'SUCCESS';
      })
      .addCase(registerUser.pending, (state) => {
        state.signup.status = 'LOADING';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.signup.status = 'ERROR';
        state.signup.message = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
