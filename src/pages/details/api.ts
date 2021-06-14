import { useRequest } from '@hooks/UseRequest';
import { TRequest } from './types';

export function useSpellDetails(id: string) {
  return useRequest<TRequest>(`spells/${id}`);
}
