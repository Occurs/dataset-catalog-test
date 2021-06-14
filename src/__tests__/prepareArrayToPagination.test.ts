import { prepareArrayToPagination } from '../utils/prepareArrayToPagination';

test('1', () => {
  expect(prepareArrayToPagination([1, 2, 3], 1, 10)).toStrictEqual([[1, 2, 3]]);
});
test('2', () => {
  expect(prepareArrayToPagination([1, 2, 3], 2, 10)).toStrictEqual([[1, 2, 3], []]);
});
test('3', () => {
  expect(prepareArrayToPagination([1, 2, 3], 2, 2)).toStrictEqual([[1, 2], [3]]);
});
test('4', () => {
  expect(prepareArrayToPagination([], 2, 2)).toStrictEqual([[], []]);
});
