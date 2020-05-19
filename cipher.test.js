import caesar from './cipher';


test('return b given a with a key of 1', () => {
  expect(caesar.cipher('a', 1)).toBe('b');
});

test('test wrapping:return bc ab given ab za with a key of 1', () => {
  expect(caesar.cipher('ab za', 1)).toBe('bc ab');
});

test('test case: return Bc given Ab with a key of 1', () => {
  expect(caesar.cipher('Ab', 1)).toBe('Bc');
});

test('test sentence: return fyyfhp fy ifbs given attack at dawn with a key of 5', () => {
  expect(caesar.cipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('test puntuation: return fyyfhp@ fy !ifbs given attack@ at !dawn with a key of 5', () => {
  expect(caesar.cipher('attack@ at !dawn', 5)).toBe('fyyfhp@ fy !ifbs');
});
