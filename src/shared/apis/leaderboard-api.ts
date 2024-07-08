import { AxiosRequestConfig } from 'axios';

import { httpApiClient } from '../config/http-client.configs';
import { generateQueryString } from '../lib/utils/apis';
import { LeaderboardResponse } from '../types/leaderboard.interfaces';
import { QueryParams } from '../types/query.interfaces';

export class LeaderboardApi {
  constructor(private url: string) {}

  getLeaderboard(query: QueryParams, config?: AxiosRequestConfig) {
    return httpApiClient.get<LeaderboardResponse>(
      `${this.url}?${generateQueryString(query)}`,
      config
    );
  }
}

export const leaderboardApi = new LeaderboardApi('/leaderboard');
