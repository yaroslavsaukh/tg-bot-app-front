import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { asyncGetLeaderboard } from './action';
import { LeaderboardSliceState } from './slice';
import { LeaderboardResponse } from '../../types/leaderboard.interfaces';

export function getLeaderboardReducer(builder: ActionReducerMapBuilder<LeaderboardSliceState>) {
  builder.addCase(asyncGetLeaderboard.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    asyncGetLeaderboard.fulfilled,
    (state, { payload }: PayloadAction<LeaderboardResponse>) => {
      state.leaderboard = payload;
      state.isLoading = false;
    }
  );

  builder.addCase(asyncGetLeaderboard.rejected, (state) => {
    state.isLoading = false;
  });
}
