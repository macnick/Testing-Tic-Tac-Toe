import winner from '../src/winner';

const board = ['X', null, 'X', 'O', 'O', 'X', 'X', null, 'O'];
const tieboard = { t: ['O', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'X'] };

it('Checks for winner', () => {
  expect(winner.checkWinner(board)).toBeTruthy;
});

it('Should be a tie', () => {
  expect(winner.checkTie(tieboard)).toBeTruthy;
});
