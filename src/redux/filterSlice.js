import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    update(_, action) {
      return action.payload;
    },
  },
});
export const filterReduser = filterSlice.reducer;
export const { update } = filterSlice.actions;
