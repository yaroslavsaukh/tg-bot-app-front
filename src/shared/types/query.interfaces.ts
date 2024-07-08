export interface QueryParams {
  [key: string]: number | string | undefined;
  page?: number;
  limit?: number;
  id?: string;
  user_id?: number;
}
