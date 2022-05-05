import axios from 'axios';
import { toast } from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  console.log(credentials);
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch {
    toast.error('Sorry, registration failed');
  }
});
export const logIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch {
    toast.error('Sorry, login failed');
  }
});

export const logOut = createAsyncThunk('auth/register', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    token.unset();
  } catch {
    toast.error('Sorry, logOut failed');
  }
});
export const getCurrent = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      await axios.post('/users/current', credentials);
    } catch {
      toast.error('Sorry, user current failed');
    }
  }
);
export const getAllContacts = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      await axios.get('/contacts', credentials);
    } catch {
      toast.error('Sorry, get all failed');
    }
  }
);
export const deleteContacts = createAsyncThunk('auth/register', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
  } catch {
    toast.error('Sorry, delete failed');
  }
});
export const addContacts = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      await axios.post('/contacts', credentials);
    } catch {
      toast.error('Sorry, add contact failed');
    }
  }
);
