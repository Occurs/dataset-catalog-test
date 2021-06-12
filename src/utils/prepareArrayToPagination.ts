export function prepareArrayToPagination<T>(
  data: Array<T>,
  totalCount: number,
  paginationLength: number,
): Array<Array<T>> {
  let count = 0;
  const res: Array<Array<T>> = [];
  for (let i = 0; i < totalCount; i += 1) {
    res[i] = [];
    for (let j = 0; j < paginationLength; j += 1) {
      if (!data[j + count]) {
        break;
      }
      res[i].push(data[j + count]);
    }
    count = count + paginationLength;
  }
  return res;
}
