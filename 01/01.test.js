import { part1, part2 } from "./01.js";
import input from "./input.json";

describe("Day 01", () => {
  describe("Part 1", () => {
    describe("TDD base case", () => {
      it("should return 2 for [22, 23, 24, 21, 14]", () => {
        const tddBaseInput = [22, 23, 24, 21, 14];
        expect(part1(tddBaseInput)).toBe(2);
      });
    });

    describe("Real input", () => {
      it("should return 1688 for input", () => {
        expect(part1(input)).toEqual(1688);
      });
    });
  });

  describe("Part 2", () => {
    describe("TDD base case", () => {
      it("should return 2 for [22, 23, 24, 31, 44, 14]", () => {
        const tddBaseInput = [22, 23, 24, 31, 44, 14];
        expect(part2(tddBaseInput)).toBe(2);
      });
    });

    describe("Real input", () => {
      it("should return 1688 for input", () => {
        expect(part2(input)).toEqual(1728);
      });
    });
  });
});
