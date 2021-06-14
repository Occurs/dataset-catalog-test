import useSWR, { SWRResponse } from 'swr';
import { getFetcher } from '@features/fetcher/fetcher';

export function useRequest<R, E = Error>(api: string): SWRResponse<R, E> {
  return useSWR<R, E>(api, getFetcher);
}
