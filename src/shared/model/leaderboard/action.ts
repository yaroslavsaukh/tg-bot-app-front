import { createAsyncThunk } from '@reduxjs/toolkit';

import { leaderboardApi } from '../../apis/leaderboard-api';
import { showServerError } from '../../lib/utils/modules';
import { QueryParams } from '../../types/query.interfaces';

export const LEADERBOARD_SLICE_NAME = 'leaderboard';

export const asyncGetLeaderboard = createAsyncThunk(
  `${LEADERBOARD_SLICE_NAME}/getLeaderboard`,
  async (query: QueryParams, { rejectWithValue }) => {
    try {
      const response = await leaderboardApi.getLeaderboard(query);
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);
