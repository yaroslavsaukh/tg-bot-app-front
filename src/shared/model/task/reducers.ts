import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { asyncGetTasks, asyncCreateTask } from './action';
import { TasksSliceState } from './slice';
import { Task } from '../../types/task.interfaces';

export function getTasksReducer(builder: ActionReducerMapBuilder<TasksSliceState>) {
  builder.addCase(asyncGetTasks.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(asyncGetTasks.fulfilled, (state, { payload }: PayloadAction<Task[]>) => {
    state.tasks = payload;
    state.isLoading = false;
  });

  builder.addCase(asyncGetTasks.rejected, (state) => {
    state.isLoading = false;
  });
}

export function createTaskReducer(builder: ActionReducerMapBuilder<TasksSliceState>) {
  builder.addCase(asyncCreateTask.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(asyncCreateTask.fulfilled, (state, { payload }: PayloadAction<Task>) => {
    state.task = payload;
    state.isLoading = false;
  });

  builder.addCase(asyncCreateTask.rejected, (state) => {
    state.isLoading = false;
  });
}
