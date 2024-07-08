import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

const selectState = (x: RootState) => x.userReducer;

export const selectCity = createSelector(selectState, ({ user }) => user);

export const selectIsLoading = createSelector(selectState, ({ isLoading }) => isLoading);
