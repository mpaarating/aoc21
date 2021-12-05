import separateCommandAndAmount from './separateCommandAndAmount';

describe('separateCommandAndAmount', () => {
  it('should return the command and amount', () => {
    const input = ['forward 10', 'left 10'];
    const expected = [
      { command: 'forward', amount: 10 },
      { command: 'left', amount: 10 },
    ];
    const actual = separateCommandAndAmount(input);
    expect(actual).toEqual(expected);
  });
});
