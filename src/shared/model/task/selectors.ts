import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

const selectState = (x: RootState) => x.taskReducer;

export const selectTask = createSelector(selectState, ({ task }) => task);
export const selectTasks = createSelector(selectState, ({ tasks }) => tasks);

export const selectIsTaskLoading = createSelector(selectState, ({ isLoading }) => isLoading);
