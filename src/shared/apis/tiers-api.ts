import { AxiosRequestConfig } from 'axios';

import { httpApiClient } from '../config/http-client.configs';
import { Tier } from '../types/tier.interfaces';

export class TiersApi {
  constructor(private url: string) {}

  getTiers(config?: AxiosRequestConfig) {
    return httpApiClient.get<{ tiers: Tier[] }>(`${this.url}`, config);
  }

  createTier(payload: Tier, config?: AxiosRequestConfig) {
    return httpApiClient.post<Tier>(`${this.url}`, payload, config);
  }

  updateTier({ id, ...payload }: Tier & { id: number }, config?: AxiosRequestConfig) {
    return httpApiClient.post<Tier>(`${this.url}/${id}`, payload, config);
  }
}

export const tiersApi = new TiersApi('/tier');
