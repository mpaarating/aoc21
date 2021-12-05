import {
  part1,
  part2,
  executeMovement,
  withAimCaseInstructions,
  withoutAimCaseInstructions,
} from './02.js';
import separateCommandAndAmount from './utils/separateCommandAndAmount.js';
import input from './input.json';

describe('Day 2', () => {
  describe('calculatePosition', () => {
    describe('without aim', () => {
      it('calculates the correct position for forward movement', () => {
        const calculatePosition = executeMovement(withoutAimCaseInstructions);
        const rawTestInput = ['forward 10'];
        const testCommandInput = separateCommandAndAmount(rawTestInput)[0];
        const startingPosition = [0, 0];
        const expected = [10, 0];
        const actual = calculatePosition(startingPosition, testCommandInput);
        expect(actual).toEqual(expected);
      });
      it('calculates the correct position for upward movement', () => {
        const calculatePosition = executeMovement(withoutAimCaseInstructions);
        const rawTestInput = ['up 10'];
        const testCommandInput = separateCommandAndAmount(rawTestInput)[0];
        const startingPosition = [0, 0];
        const expected = [0, -10];
        const actual = calculatePosition(startingPosition, testCommandInput);
        expect(actual).toEqual(expected);
      });
      it('calculates the correct position for downward movement', () => {
        const calculatePosition = executeMovement(withoutAimCaseInstructions);
        const rawTestInput = ['down 10'];
        const testCommandInput = separateCommandAndAmount(rawTestInput)[0];
        const startingPosition = [0, 0];
        const expected = [0, 10];
        const actual = calculatePosition(startingPosition, testCommandInput);
        expect(actual).toEqual(expected);
      });
    });

    describe('with aim', () => {
      it('calculates the correct position and aim for forward movement', () => {
        const calculatePosition = executeMovement(withAimCaseInstructions);
        const rawTestInput = ['forward 10'];
        const testCommandInput = separateCommandAndAmount(rawTestInput)[0];
        const startingPosition = [3, 4, 3];
        const expected = [13, 34, 3];
        const actual = calculatePosition(startingPosition, testCommandInput);
        expect(actual).toEqual(expected);
      });
      it('calculates the correct position and aim for upward movement', () => {
        const calculatePosition = executeMovement(withAimCaseInstructions);
        const rawTestInput = ['up 10'];
        const testCommandInput = separateCommandAndAmount(rawTestInput)[0];
        const startingPosition = [3, 4, 3];
        const expected = [3, 4, -7];
        const actual = calculatePosition(startingPosition, testCommandInput);
        expect(actual).toEqual(expected);
      });
      it('calculates the correct position and aim for downward movement', () => {
        const calculatePosition = executeMovement(withAimCaseInstructions);
        const rawTestInput = ['down 10'];
        const testCommandInput = separateCommandAndAmount(rawTestInput)[0];
        const startingPosition = [3, 4, 3];
        const aim = 3;
        const expected = [3, 4, 13];
        const actual = calculatePosition(startingPosition, testCommandInput);
        expect(actual).toEqual(expected);
      });
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

  describe('part2', () => {
    describe('TDD base case', () => {
      it('returns the product of the current position after a series of movement commands', () => {
        const testInput = [
          'forward 3',
          'down 4',
          'forward 5',
          'up 1',
          'forward 2',
        ];
        const expected = 260;
        const actual = part2(testInput);
        expect(actual).toEqual(expected);
      });
    });

    describe('Real input', () => {
      it('returns the product of the current position after a series of movement commands', () => {
        const expected = 1685186100;
        const actual = part2(input);
        expect(actual).toEqual(expected);
      });
    });
  });
});
