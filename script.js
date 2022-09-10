let chessBoard = [];
let colors = [`black`, `white`];
let chessrow = [];
for (let i = 0; i < 8; i++) {
  chessrow = [];
  for (let j = 0; j < 8; j++) {
    chessrow[j] = colors[(i + j) % 2];
  }
  chessBoard[i] = chessrow;
}
console.log(chessBoard);
