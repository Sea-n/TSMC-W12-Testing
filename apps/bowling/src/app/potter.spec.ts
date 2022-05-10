import { Potter } from './potter';

test('Basics', () => {
  const potter = new Potter();
  expect(potter.price([])).toBe(0);
  expect(potter.price([1])).toBe(8);
  expect(potter.price([2])).toBe(8);
  expect(potter.price([3])).toBe(8);
  expect(potter.price([4])).toBe(8);
  expect(potter.price([1, 1, 1])).toBe(8 * 3);
});

test('Simple Discounts', () => {
  const potter = new Potter();
  expect(potter.price([0, 1])).toBe(8 * 2 * 0.95);
  expect(potter.price([0, 2, 4])).toBe(8 * 3 * 0.9);
  expect(potter.price([0, 1, 2, 4])).toBe(8 * 4 * 0.8);
  expect(potter.price([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75);
});
