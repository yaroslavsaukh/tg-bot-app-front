import { AxiosRequestConfig } from 'axios';

import { httpApiClient } from '../config/http-client.configs';
import { Task } from '../types/task.interfaces';

export class TasksApi {
  constructor(private url: string) {}

  getTasks(config?: AxiosRequestConfig) {
    return httpApiClient.get<Task[]>(`${this.url}`, config);
  }

  createTask(payload: Task, config?: AxiosRequestConfig) {
    return httpApiClient.post<Task>(`${this.url}`, payload, config);
  }
}

export const tasksApi = new TasksApi('/task');
