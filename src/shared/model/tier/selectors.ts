import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

const selectState = (x: RootState) => x.tierReducer;

export const selectTier = createSelector(selectState, ({ tier }) => tier);
export const selectTiers = createSelector(selectState, ({ tiers }) => tiers);

export const selectIsTierLoading = createSelector(selectState, ({ isLoading }) => isLoading);
