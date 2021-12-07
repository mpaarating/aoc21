import { part1, part2 } from "./03.js";
import { readInput } from "../helpers/readInput.js";

const parseOpts = { delimiter: ",", transform: (o) => o.map(([l]) => l) };

describe("day 3", () => {
  describe("part 1", () => {
    describe("TDD base case", () => {
      it("should return the correct result", () => {
        const testInput = ["000", "100", "010", "001"];
        const mostCommonDec = parseInt("000", 2);
        const leastCommonDec = parseInt("111", 2);
        const expected = mostCommonDec * leastCommonDec;
        const actual = part1(testInput);
        expect(actual).toEqual(expected);
      });
    });
    describe("Real input data", () => {
      it("should return the correct result", () => {
        const input = readInput("./03/input", parseOpts);
        const expected = 4139586;
        const actual = part1(input);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("part 2", () => {
    describe('TDD base case', () => {
      it('should return the correct result', () => {
        const testInput = ["00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010"];
        const expected = 230;
        const actual = part2(testInput);
        expect(actual).toEqual(expected);
      });
    })
    
    describe("Real input data", () => {
      it("should return the correct result", () => {
        const input = readInput("./03/input", parseOpts);
        const expected = 1800151;
        const actual = part2(input);
        expect(actual).toEqual(expected);
      });
    })
  });
});
