import { Potter } from './potter';

test('Basics', () => {
  const potter = new Potter();
  expect(potter.price([])).toBe(0);
  expect(potter.price([1])).toBe(8);
  expect(potter.price([2])).toBe(8);
  expect(potter.price([3])).toBe(8);
  expect(potter.price([4])).toBe(8);
  expect(potter.price([1, 1, 1])).toBe(8 * 3);
})
