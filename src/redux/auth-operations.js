import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import showToastError from './showToastError';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch {
    showToastError('Sorry, registration is failed');
  }
});
export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch {
    showToastError('Sorry, login is failed');
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch {
    showToastError('Sorry, logout failed');
  }
});
export const getCurrentUser = createAsyncThunk(
  'auth/fechcurrent',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');

      if (!data) {
        return thunkAPI.rejectWithValue();
      }
      return data;
    } catch {
      token.unset();

      return thunkAPI.rejectWithValue();
    }
  }
);
