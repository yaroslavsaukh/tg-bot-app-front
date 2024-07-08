import { createSlice } from '@reduxjs/toolkit';

import { LEADERBOARD_SLICE_NAME } from './action';
import { getLeaderboardReducer } from './reducers';
import { LeaderboardResponse } from '../../types/leaderboard.interfaces';

export interface LeaderboardSliceState {
  isLoading: boolean;
  leaderboard: LeaderboardResponse | null;
}

export const initialState: LeaderboardSliceState = {
  leaderboard: null,
  isLoading: false
};

const leaderboardSlice = createSlice({
  name: LEADERBOARD_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getLeaderboardReducer(builder);
  }
});

export const leaderboardReducer = leaderboardSlice.reducer;
