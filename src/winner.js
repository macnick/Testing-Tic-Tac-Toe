import view from './view';

const winner = (() => {
  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    let winner = false;
    winConditions.forEach((row) => {
      if (
        board[row[0]] === board[row[1]] &&
        board[row[1]] === board[row[2]] &&
        (board[row[0]] === 'X' || board[row[0]] === 'O')
      ) {
        winner = true;
        view.showWinningComb(row);
      }
    });
    return winner;
  };

  const checkTie = (t) => t.t.every((pos) => pos != null);

  return { checkWinner, checkTie };
})();

export default winner;
