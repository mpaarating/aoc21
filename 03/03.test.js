import { part1 } from "./03.js";
import { readInput } from "../helpers/readInput.js";

const parseOpts = { delimiter: ",", transform: (o) => o.map(([l]) => l) };

describe("day 3", () => {
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
