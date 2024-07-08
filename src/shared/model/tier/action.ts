import { createAsyncThunk } from '@reduxjs/toolkit';

import { tiersApi } from '../../apis/tiers-api';
import { showServerError } from '../../lib/utils/modules';
import { Tier } from '../../types/tier.interfaces';

export const TIERS_SLICE_NAME = 'tier';

export const asyncGetTiers = createAsyncThunk(
  `${TIERS_SLICE_NAME}/getTiers`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await tiersApi.getTiers();
      return response.data.tiers;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);

export const asyncCreateTier = createAsyncThunk(
  `${TIERS_SLICE_NAME}/createTier`,
  async (payload: Tier, { rejectWithValue }) => {
    try {
      const response = await tiersApi.createTier(payload);
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);

export const asyncUpdateTier = createAsyncThunk(
  `${TIERS_SLICE_NAME}/updateTier`,
  async (payload: Tier & { id: number }, { rejectWithValue }) => {
    try {
      const response = await tiersApi.updateTier(payload);
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);
