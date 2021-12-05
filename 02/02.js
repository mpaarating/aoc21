import separateCommandAndAmount from './utils/separateCommandAndAmount.js';

/**
 * Calculates the current position from a given starting point and a given movement instruction
 * @param {number[]} position - Current position in horizontal and depth [horizontal, depth]
 * @param {object} instruction - Movement command
 * @param {string} command.command - Direction of movement
 * @param {number} command.amount - Number of steps
 * @returns {number[]} - New position in horizontal and depth [horizontal, depth]
 */
export function calculatePosition(position, instruction) {
  let [horizontal, depth] = position;
  switch (instruction.command) {
    case 'forward':
      horizontal += instruction.amount;
      break;
    case 'up':
      depth -= instruction.amount;
      break;
    case 'down':
      depth += instruction.amount;
      break;
  }
  return [horizontal, depth];
}

/**
 * Returns the product of the horizontal position and depth from the array of commands.
 * @param {string[]} commands - The array of commands.
 * @returns {number} product - The product of the horizontal position and depth.
 */
export function part1(commands) {
  const parsedCommands = separateCommandAndAmount(commands);
  let position = [0, 0];
  let result = 0;
  for (let command of parsedCommands) {
    position = calculatePosition(position, command);
    result = Math.max(result, position[0] * position[1]);
  }
  return result;
}
