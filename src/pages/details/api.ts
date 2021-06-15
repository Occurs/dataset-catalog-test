import { SWRResponse } from 'swr';
import { useRequest } from '@hooks/UseRequest';
import { TRequest } from './types';

export function useSpellDetails(id: string): SWRResponse<TRequest, Error> {
  return useRequest<TRequest>(`spells/${id}`);
}
