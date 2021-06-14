import { getFetcher } from '@features/fetcher/fetcher';
import { TRequest } from './types';

export function getSpells(query: string): Promise<TRequest> {
  return getFetcher<TRequest, { name: string }>('spells', { name: query });
}
