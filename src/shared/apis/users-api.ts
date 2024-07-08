import { AxiosRequestConfig } from 'axios';

import { httpApiClient } from '../config/http-client.configs';
import { User } from '../types/users.interfaces';

export class UsersApi {
  constructor(private url: string) {}

  getUser(payload: User, config?: AxiosRequestConfig) {
    return httpApiClient.post<{ user: User }>(`${this.url}`, payload, config);
  }
}

export const usersApi = new UsersApi('/user');
