import { createAsyncThunk } from '@reduxjs/toolkit';

import { tasksApi } from '../../apis/tasks-api';
import { showServerError } from '../../lib/utils/modules';
import { Task } from '../../types/task.interfaces';

export const TASKS_SLICE_NAME = 'tasks';

export const asyncGetTasks = createAsyncThunk(
  `${TASKS_SLICE_NAME}/getTasks`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await tasksApi.getTasks();
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);

export const asyncCreateTask = createAsyncThunk(
  `${TASKS_SLICE_NAME}/createTask`,
  async (payload: Task, { rejectWithValue }) => {
    try {
      const response = await tasksApi.createTask(payload);
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);
