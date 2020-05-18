import reverseString from './reverseString.js';

test('name should be reversed - eman', () => {
  expect(reverseString('name')).toBe('eman');
});

test('should return not a string if given a number', () => {
  expect(reverseString(1)).toBe('not a string');
});
