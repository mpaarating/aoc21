import separateCommandAndAmount from './utils/separateCommandAndAmount.js';

const forward = ([horizontal, depth], amount) => [horizontal + amount, depth];
const up = ([horizontal, depth], amount) => [horizontal, depth - amount];
const down = ([horizontal, depth], amount) => [horizontal, depth + amount];

const forwardWithAim = ([horizontal, depth], amount, aim) => [
  horizontal + amount,
  aim === 0 ? depth : amount * aim,
  aim,
];
const upWithAim = ([horizontal, depth], amount, aim) => [
  horizontal,
  depth,
  aim - amount,
];
const downWithAim = ([horizontal, depth], amount, aim) => [
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

export const executeMovement =
  (caseInstructions) => (position, instruction, aim) =>
    caseInstructions[instruction.command](position, instruction.amount, aim);

/**
 * Returns the product of the horizontal position and depth from the array of commands.
 * @param {string[]} commands - The array of commands.
 * @returns {number} The product of the horizontal position and depth.
 */
export function part1(commands) {
  const calculatePosition = executeMovement(withoutAimCaseInstructions);
  const parsedCommands = separateCommandAndAmount(commands);
  let position = [0, 0];
  for (let command of parsedCommands) {
    position = calculatePosition(position, command);
  }
  const [horizontal, depth] = position;
  return horizontal * depth;
}

/**
 * Returns the product of the horizontal position and depth from the array of commands including aim
 * @param {string[]} commands - The array of commands.
 * return {number} product - The product of the horizontal position and depth.
 */
export function part2(commands) {
  const calculatePosition = executeMovement(withAimCaseInstructions);
  const parsedCommands = separateCommandAndAmount(commands);
  let position = [0, 0];
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  let result = 0;
  for (let command of parsedCommands) {
    [horizontal, depth, aim] = calculatePosition(
      [horizontal, depth],
      command,
      aim
    );
  }

  return horizontal * depth;
}
