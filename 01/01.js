export const part1 = (arr) => {
  return arr.reduce((acc, curr, index) => {
    if (arr[index - 1] && curr > arr[index - 1]) {
      return (acc += 1);
    }

    return acc;
  }, 0);
};

export const part2 = (arr) => {
  let totalledTrios = [];

  arr.forEach((curr, index) => {
    let [prev, next] = [arr[index - 1], arr[index + 1]];

    if (prev && next) {
        totalledTrios.push(prev + curr + next);
    };

  });

  return part1(totalledTrios);
};
