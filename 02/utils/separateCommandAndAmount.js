/**
 * Seperates array of strings into an array of objects with command and amount properties
 * @param {string[]} arr - Array of strings like "forward 9"
 * @returns {Object[]} pairedCommands - Object with the command and the amount
 * @returns {string} pairedCommands[].command - The command
 * @returns {number} pairedCommands[].amount - The amount
 */
export default function separateCommandAndAmount(arr) {
  const pairedCommands = [];
  arr.forEach((str) => {
    const [command, stringAmount] = str.split(' ');
    const amount = parseInt(stringAmount, 10);
    pairedCommands.push({ command, amount });
  });
  return pairedCommands;
}
