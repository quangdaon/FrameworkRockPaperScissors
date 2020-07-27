import { randomFromArray } from './helpers';
describe('randomFromArray', () => {
  it('returns an item from array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    for (let i = 0; i < 10000; i++) {
      const result = randomFromArray(arr);
  
      expect(arr).toContain(result);
    }
  });
});