import sortByHealth from './app';

test('the test of sorting by standard of living', () => {
  const arrTest = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const arrSortTest = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortByHealth(arrTest);

  expect(result).toEqual(arrSortTest);
});
