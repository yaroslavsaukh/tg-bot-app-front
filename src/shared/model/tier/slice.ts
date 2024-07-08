import { createSlice } from '@reduxjs/toolkit';

import { TIERS_SLICE_NAME } from './action';
import { getTiersReducer, createTierReducer, updateTierReducer } from './reducers';
import { Tier } from '../../types/tier.interfaces';

export interface TiersSliceState {
  isLoading: boolean;
  tier: Tier | null;
  tiers: Tier[] | null;
}

export const initialState: TiersSliceState = {
  tier: null,
  tiers: null,
  isLoading: false
};

const tierSlice = createSlice({
  name: TIERS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getTiersReducer(builder);
    createTierReducer(builder);
    updateTierReducer(builder);
  }
});

export const tierReducer = tierSlice.reducer;
