let color1 = prompt("choose a color");
let color2 = prompt(`chosse a different color`);
let chessBoard = [];
let colors = [color1, color2];
let cellid;
for (let i = 0; i < 8; i++) {
  chessBoard[i] = [];
  for (let j = 0; j < 8; j++) {
    chessBoard[i][j] = colors[(i + j) % 2];
    cellid = i.toString() + j.toString();
    var cell = document.getElementById(cellid);
    cell.style.background = colors[(i + j) % 2];
  }
}
console.log(chessBoard);