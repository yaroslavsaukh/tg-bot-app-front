import { createSlice } from '@reduxjs/toolkit';

import { TASKS_SLICE_NAME } from './action';
import { getTasksReducer, createTaskReducer } from './reducers';
import { Task } from '../../types/task.interfaces';

export interface TasksSliceState {
  isLoading: boolean;
  task: Task | null;
  tasks: Task[] | null;
}

export const initialState: TasksSliceState = {
  task: null,
  tasks: null,
  isLoading: false
};

const tasksSlice = createSlice({
  name: TASKS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getTasksReducer(builder);
    createTaskReducer(builder);
  }
});

export const taskReducer = tasksSlice.reducer;
