import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer, taskReducer, tierReducer, leaderboardReducer } from 'shared';

const rootReducer = combineReducers({ userReducer, taskReducer, tierReducer, leaderboardReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
