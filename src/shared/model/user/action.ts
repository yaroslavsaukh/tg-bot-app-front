import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersApi } from '../../apis/users-api';
import { showServerError } from '../../lib/utils/modules';
import { User } from '../../types/users.interfaces';

export const USER_SLICE_NAME = 'user';

export const asyncGetUser = createAsyncThunk(
  `${USER_SLICE_NAME}/getUser`,
  async (payload: User, { rejectWithValue }) => {
    try {
      const response = await usersApi.getUser(payload);
      return response.data.user;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);
