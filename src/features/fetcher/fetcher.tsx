import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/',
});

export function getFetcher<T, P>(url: string, params?: P): Promise<T> {
  return instance.get(url, { params }).then((res) => res.data);
}
