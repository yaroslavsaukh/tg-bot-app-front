import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { asyncCreateTier, asyncGetTiers, asyncUpdateTier } from './action';
import { TiersSliceState } from './slice';
import { Tier } from '../../types/tier.interfaces';

export function getTiersReducer(builder: ActionReducerMapBuilder<TiersSliceState>) {
  builder.addCase(asyncGetTiers.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(asyncGetTiers.fulfilled, (state, { payload }: PayloadAction<Tier[]>) => {
    state.tiers = payload;
    state.isLoading = false;
  });

  builder.addCase(asyncGetTiers.rejected, (state) => {
    state.isLoading = false;
  });
}

export function createTierReducer(builder: ActionReducerMapBuilder<TiersSliceState>) {
  builder.addCase(asyncCreateTier.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(asyncCreateTier.fulfilled, (state, { payload }: PayloadAction<Tier>) => {
    state.tier = payload;
    state.isLoading = false;
  });

  builder.addCase(asyncCreateTier.rejected, (state) => {
    state.isLoading = false;
  });
}

export function updateTierReducer(builder: ActionReducerMapBuilder<TiersSliceState>) {
  builder.addCase(asyncUpdateTier.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(asyncUpdateTier.fulfilled, (state, { payload }: PayloadAction<Tier>) => {
    state.tier = payload;
    state.isLoading = false;
  });

  builder.addCase(asyncUpdateTier.rejected, (state) => {
    state.isLoading = false;
  });
}
