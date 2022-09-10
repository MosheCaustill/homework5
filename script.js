<<<<<<< HEAD
let color1 = prompt('choose a color');
let color2 = prompt(`chosse a different color`);
let chessBoard = [];
let colors = [color1, color2];
let chessrow = [];
for (let i = 0; i < 8; i++) {
  chessrow = [];
  for (let j = 0; j < 8; j++) {
    chessrow[j] = colors[(i + j) % 2];
  }
  chessBoard[i] = chessrow;
}
console.log(chessBoard);
for (let k = 0; k < 8; k++) {
  let line = "board" + String(k);
  console.log(line);
  const rectWrapDiv = document.getElementById(line).children;
  console.log(rectWrapDiv);
  for (const prop of rectWrapDiv) {
    prop.classList.add("rectangle");
  }
  for (let i = 0; i < rectWrapDiv.length; i++) {
    console.log(rectWrapDiv.length);
    rectWrapDiv[i].style.background = colors[(i+k) % 2];
  }
=======
let color1 = prompt('choose a color');
let color2 = prompt(`chosse a different color`);
let chessBoard = [];
let colors = [color1, color2];
let chessrow = [];
for (let i = 0; i < 8; i++) {
  chessrow = [];
  for (let j = 0; j < 8; j++) {
    chessrow[j] = colors[(i + j) % 2];
  }
  chessBoard[i] = chessrow;
}
console.log(chessBoard);
for (let k = 0; k < 8; k++) {
  let line = "board" + String(k);
  console.log(line);
  const rectWrapDiv = document.getElementById(line).children;
  console.log(rectWrapDiv);
  for (const prop of rectWrapDiv) {
    prop.classList.add("rectangle");
  }
  for (let i = 0; i < rectWrapDiv.length; i++) {
    console.log(rectWrapDiv.length);
    rectWrapDiv[i].style.background = colors[(i+k) % 2];
  }
>>>>>>> 98ffd3a62df180be3b9bf98e5e3efdb23c6c733d
}