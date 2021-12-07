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

const getOxygenIndex = (input) => {
  const [zero, one] = Object.values(input);
  return zero > one ? "0" : "1";
}

const getCo2Index = (input) => {
  const [zero, one] = Object.values(input);
  return zero > one ? "1" : "0";
}

const getRating = (input, getElementIndex) => {
  let element = input;
  let elementCounts = getBitCounts(element);
  let columnIndex = 0;
  const elementBitLength = element[0].length;
  let bitResults;

  while(columnIndex < elementBitLength && !bitResults) {
    const elementCount = elementCounts[columnIndex];
    const elementIndex = getElementIndex(elementCount);
    element = element.filter(row => row[columnIndex] === elementIndex);

    if (element.length === 1) {
      bitResults = element[0];
      return bitResults;
    }

    elementCounts = getBitCounts(element);
    columnIndex++;
  }

  return bitResults;
}

export const part2 = (input) => {
  const oxygen = getRating(input, getOxygenIndex);
  const co2 = getRating(input, getCo2Index);

  const oxygenRate = parseInt(oxygen, 2);
  const co2Rate = parseInt(co2, 2);

  const result = oxygenRate * co2Rate;
  return result;
};
