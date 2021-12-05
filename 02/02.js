import separateCommandAndAmount from './utils/separateCommandAndAmount.js';

const forward = ([horizontal, depth], amount) => [horizontal + amount, depth];
const up = ([horizontal, depth], amount) => [horizontal, depth - amount];
const down = ([horizontal, depth], amount) => [horizontal, depth + amount];

const forwardWithAim = ([horizontal, depth, aim], amount) => [
  horizontal + amount,
  depth + amount * aim,
  aim,
];
const upWithAim = ([horizontal, depth, aim], amount) => [
  horizontal,
  depth,
  aim - amount,
];
const downWithAim = ([horizontal, depth, aim], amount) => [
  horizontal,
  depth,
  aim + amount,
];

export const withAimCaseInstructions = {
  forward: forwardWithAim,
  up: upWithAim,
  down: downWithAim,
};

export const withoutAimCaseInstructions = {
  forward,
  up,
  down,
};

export const executeMovement = (caseInstructions) => (position, instruction) =>
  caseInstructions[instruction.command](position, instruction.amount);

/**
 * Returns the product of the horizontal position and depth from the array of commands.
 * @param {string[]} commands - The array of commands.
 * @returns {number} The product of the horizontal position and depth.
 */
export const part1 = (commands) => {
  const calculatePosition = executeMovement(withoutAimCaseInstructions);
  const parsedCommands = separateCommandAndAmount(commands);
  let position = [0, 0];
  for (let command of parsedCommands) {
    position = calculatePosition(position, command);
  }
  const [horizontal, depth] = position;
  return horizontal * depth;
};

/**
 * Returns the product of the horizontal position and depth from the array of commands including aim
 * @param {string[]} commands - The array of commands.
 * return {number} product - The product of the horizontal position and depth.
 */
export const part2 = (commands) => {
  const calculatePosition = executeMovement(withAimCaseInstructions);
  const parsedCommands = separateCommandAndAmount(commands);
  let position = [0, 0, 0];
  for (let command of parsedCommands) {
    position = calculatePosition(position, command);
  }

  const [horizontal, depth, aim] = position;
  return horizontal * depth;
};
