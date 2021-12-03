export const part1 = (arr) => {
    return arr.reduce((acc, curr, index) => {
        if (arr[index - 1] && curr > arr[index - 1]) {
            return acc += 1;
        }

        return acc;
    }, 0);
}

export const part2 = (arr) => {
    return 0;
}