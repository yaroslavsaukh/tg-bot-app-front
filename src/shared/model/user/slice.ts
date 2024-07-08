import { createSlice } from '@reduxjs/toolkit';

import { USER_SLICE_NAME } from './action';
import { getUserReducer } from './reducers';
import { User } from '../../types/users.interfaces';

export interface UserSliceState {
  isLoading: boolean;
  user: User | null;
}

export const initialState: UserSliceState = {
  user: null,
  isLoading: false
};

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getUserReducer(builder);
  }
});

export const userReducer = userSlice.reducer;
