import { ascSort, descSort } from '../utils/spellSort';

const testData = [
  {
    index: '',
    name: 'Acid',
    url: '',
  },
  {
    index: '',
    name: 'Hellfire',
    url: '',
  },
  {
    index: '',
    name: 'heal',
    url: '',
  },
  {
    index: '',
    name: 'Zeal of evil',
    url: '',
  },
  {
    index: '',
    name: '',
    url: '',
  },
];

test('asc', () => {
  expect(testData.sort(ascSort)).toStrictEqual([
    {
      index: '',
      name: '',
      url: '',
    },
    {
      index: '',
      name: 'Acid',
      url: '',
    },
    {
      index: '',
      name: 'heal',
      url: '',
    },
    {
      index: '',
      name: 'Hellfire',
      url: '',
    },
    {
      index: '',
      name: 'Zeal of evil',
      url: '',
    },
  ]);
});
test('desc', () => {
  expect(testData.sort(descSort)).toStrictEqual([
    {
      index: '',
      name: 'Zeal of evil',
      url: '',
    },
    {
      index: '',
      name: 'Hellfire',
      url: '',
    },
    {
      index: '',
      name: 'heal',
      url: '',
    },
    {
      index: '',
      name: 'Acid',
      url: '',
    },
    {
      index: '',
      name: '',
      url: '',
    },
  ]);
});
