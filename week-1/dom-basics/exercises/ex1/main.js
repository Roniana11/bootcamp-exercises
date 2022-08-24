const ball = document.getElementById("ball");
const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");
const upArrow = document.getElementById("up");
const downArrow = document.getElementById("down");
const playgroundWidth =
  document.getElementById("playing-field").clientWidth - ball.clientWidth;
const playgroundHeight =
  document.getElementById("playing-field").clientHeight - ball.clientHeight;

let left_offset = 0;
let top_offset = 0;
let right_offset = playgroundHeight;
let bottom_offset = playgroundHeight;

const makeMove = (event) => {
  event.preventDefault();
  const keyCode = event.keyCode;
  switch (keyCode) {
    case 37:
      leftArrow.click();
      break;
    case 38:
      upArrow.click();
      break;
    case 39:
      rightArrow.click();
      break;
    case 40:
      downArrow.click();
      break;
    default:
      return;
  }
};

const moveRight = function () {
  right_offset = right_offset - 10 < 0 ? 0 : right_offset - 10;
  left_offset =
    left_offset + 10 >= playgroundWidth ? playgroundWidth : left_offset + 10;
  ball.style.right = `${right_offset}px`;
  ball.style.left = `${left_offset}px`;
};

const moveLeft = function () {
  left_offset = left_offset - 10 < 0 ? 0 : left_offset - 10;
  right_offset =
    right_offset + 10 >= playgroundWidth ? playgroundWidth : right_offset + 10;
  ball.style.left = `${left_offset}px`;
  ball.style.right = `${right_offset}px`;
};

const moveUp = function () {
  top_offset = top_offset - 10 < 0 ? 0 : top_offset - 10;
  bottom_offset =
    bottom_offset + 10 >= playgroundHeight
      ? playgroundHeight
      : bottom_offset + 10;
  ball.style.bottom = `${bottom_offset}px`;
  ball.style.top = `${top_offset}px`;
};

const moveDown = function () {

  bottom_offset = bottom_offset - 10 < 0 ? 0 : bottom_offset - 10;
  top_offset =
    top_offset + 10 >= playgroundHeight ? playgroundHeight : top_offset + 10;
  ball.style.top = `${top_offset}px`;
  ball.style.bottom = `${bottom_offset}px`;
};

rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);
upArrow.addEventListener("click", moveUp);
downArrow.addEventListener("click", moveDown);
window.addEventListener("keydown", (e) => makeMove(e));
