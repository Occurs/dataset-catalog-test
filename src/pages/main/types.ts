export type TRequest = {
  count: number;
  results: Array<TResult>;
};

export type TResult = {
  index: string;
  name: string;
  url: string;
};

export type TViewData = Array<Array<TResult>> | null;
