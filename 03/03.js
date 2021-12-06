/**
 * This takes in an array of binary numbers and returns the product
 * of the most common number and the least common number of each "column".
 * @param {number[]} input - array of binary numbers
 * @returns {number} - product of most common number and least common number of each "column"
 */
export const part1 = (input) => {
  const inputValLength = String(input[0]).length;
  const onesCount = Array(inputValLength).fill([]);
  const zerosCount = Array(inputValLength).fill([]);
  let mostCommon = '';
  let leastCommon = '';
  input.forEach((num) => {
    String(num)
      .split("")
      .forEach((digit, index) => {
        if (digit === "1") {
          onesCount[index] = onesCount[index].concat(digit);
        } else {
          zerosCount[index] = zerosCount[index].concat(digit);
        }
      });
  });

  onesCount.forEach((ones, index) => {
    const longOne = ones.length > zerosCount[index].length;
    if (ones.length > zerosCount[index].length) {
        mostCommon += "1";
        leastCommon += "0";
    } else {
        mostCommon += "0";
        leastCommon += "1";
        console.log(mostCommon, leastCommon);
    }
  });


  const result = parseInt(mostCommon, 2) * parseInt(leastCommon, 2);
  return result;
};
