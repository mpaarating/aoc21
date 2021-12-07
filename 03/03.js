/**
 * Takes in an array of numbers and returns the counts for each number.
 * @param {number[]} input
 * @returns {Object} bitCounts
 */
const getBitCounts = (input) => {
  const bitLenth = input[0].length;
  let rowIndex;
  let colIndex = 0;
  let bitCounts = {};

  while(colIndex < bitLenth) {
    bitCounts[colIndex] = { 0: 0, 1: 0 };

    for (rowIndex = 0; rowIndex < input.length; rowIndex++) {
      const bit = input[rowIndex][colIndex];
      bitCounts[colIndex][bit]++;
    }

    colIndex++;
  }

  return bitCounts;
};

/**
 * This takes in an array of binary numbers and returns the product
 * of the most common number and the least common number of each "column".
 * @param {number[]} input - array of binary numbers
 * @returns {number} - product of most common number and least common number of each "column"
 */
export const part1 = (input) => {
  const bitCounts = getBitCounts(input);
  const mostCommon = Object.values(bitCounts).map(bitCount => {
    const [zero, one] = Object.values(bitCount);
    return one > zero ? '1' : '0';
  });
  const leastCommon = mostCommon.map(bit => bit === '1' ? '0' : '1');

  const result = parseInt(mostCommon.join(''), 2) * parseInt(leastCommon.join(''), 2);
  return result;
};

export const part2 = (input) => {
  // TODO
  return 0;
};
