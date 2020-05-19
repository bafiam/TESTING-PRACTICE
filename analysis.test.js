import analyze from './analysis';

test('object.average of arr [1,2,3] should be 2', () => {
  expect(analyze([1, 2, 3]).average).toBe(2);
});

test('object.min of arr [1,2,3] should be 1', () => {
  expect(analyze([1, 2, 3]).min).toBe(1);
});

test('object.max of arr [1,2,3] should be 3', () => {
  expect(analyze([1, 2, 3]).max).toBe(3);
});

test('object.length of arr [1,2,3,4,5] should be 3', () => {
  expect(analyze([1, 2, 3, 4, 5]).length).toBe(5);
});
