import controller from '../src/index';

const board = ['X', null, 'X', 'O', 'O', 'X', 'X', null, 'O'];

it('Checks for winner', () => {
  expect(controller.checkWinner(board)).toBeFalsy;
});
