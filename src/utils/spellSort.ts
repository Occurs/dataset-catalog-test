import { TResult } from '@pages/main/types';

export function ascSort(a: TResult, b: TResult): number {
  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0;
}

export function descSort(a: TResult, b: TResult): number {
  return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 0;
}
