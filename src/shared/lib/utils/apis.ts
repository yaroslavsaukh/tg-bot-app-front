import { QueryParams } from '../../types/query.interfaces';

export const generateQueryString = (query: QueryParams) =>
  Object.keys(query)
    .map((queryKey) => `&${queryKey}=${query[queryKey] ?? ''}`)
    .join('');
