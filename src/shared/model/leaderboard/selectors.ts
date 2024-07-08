import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

const selectState = (x: RootState) => x.leaderboardReducer;

export const selectLeaderboard = createSelector(selectState, ({ leaderboard }) => leaderboard);

export const selectIsLeaderboardLoading = createSelector(selectState, ({ isLoading }) => isLoading);
