import { calculatePosition, part1 } from './02.js';
import separateCommandAndAmount from './utils/separateCommandAndAmount.js';
import input from './input.json';

describe('Day 2', () => {
  describe('calculatePosition', () => {
    it('returns the correct positions', () => {
      const rawTestInput = ['forward 1'];
      const testCommandInput = separateCommandAndAmount(rawTestInput)[0];
      const startingPosition = [0, 0];
      const expected = [1, 0];
      const actual = calculatePosition(startingPosition, testCommandInput);
      expect(actual).toEqual(expected);
    });
  });

  describe('part1', () => {
    describe('TDD base case', () => {
      it('returns the product of the current position after a series of movement commands', () => {
        const testInput = [
          'forward 1',
          'up 1',
          'forward 1',
          'down 1',
          'forward 1',
          'down 1',
          'forward 1',
        ];
        const expected = 4;
        const actual = part1(testInput);
        expect(actual).toEqual(expected);
      });
    });

    describe('Real input', () => {
      it('returns the product of the current position after a series of movement commands', () => {
        const expected = 1604850;
        const actual = part1(input);
        expect(actual).toEqual(expected);
      });
    });
  });
});
