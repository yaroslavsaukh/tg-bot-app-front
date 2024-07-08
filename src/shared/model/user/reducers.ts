import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { asyncGetUser } from './action';
import { UserSliceState } from './slice';
import { User } from '../../types/users.interfaces';

export function getUserReducer(builder: ActionReducerMapBuilder<UserSliceState>) {
  builder.addCase(asyncGetUser.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(asyncGetUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
    state.user = payload;
    state.isLoading = false;
  });

  builder.addCase(asyncGetUser.rejected, (state) => {
    state.isLoading = false;
  });
}
