import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

const selectState = (x: RootState) => x.userReducer;

export const selectUser = createSelector(selectState, ({ user }) => user);

export const selectIsUserLoading = createSelector(selectState, ({ isLoading }) => isLoading);
