import calculator from './calculator';

test('add: 1 + 3 should be equal to 4', () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test('subtract: 1 - 3 should be equal to -2', () => {
  expect(calculator.subtract(1, 3)).toBe(-2);
});

test('multiply: 1 * 3 should be equal to 3', () => {
  expect(calculator.multiply(1, 3)).toBe(3);
});

test('divide: 1 / 3 should be equal to 2', () => {
  expect(calculator.divide(1, 3)).toBeCloseTo(0.33);
});
