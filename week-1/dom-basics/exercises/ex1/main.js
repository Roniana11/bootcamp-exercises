const ball = document.getElementById("ball");
const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");
const upArrow = document.getElementById("up");
const downArrow = document.getElementById("down");
const playgroundWidth =
  document.getElementById("playing-field").clientWidth - ball.clientWidth;
const playgroundHeight =
  document.getElementById("playing-field").clientHeight - ball.clientHeight;

const directions = {
  left: 0,
  top: 0,
  right: playgroundHeight,
  bottom: playgroundHeight,
};

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
  moveBall('right','left',playgroundWidth);
};

const moveLeft = function () {
  moveBall('left','right',playgroundWidth);
};

const moveUp = function () {
  moveBall('top','bottom',playgroundHeight);
};

const moveDown = function () {
  moveBall('bottom','top',playgroundHeight);
};

const moveBall = function (direction, oppDir, max) {
  const currentDirection = directions[direction];
  const currentOppDirection = directions[oppDir];

  directions[direction] = currentDirection - 10 < 0 ? 0 : currentDirection - 10;
  directions[oppDir] = currentOppDirection + 10 >= max ? max : currentOppDirection + 10;
  ball.style[direction] = `${directions[direction]}px`;
  ball.style[oppDir] = `${directions[oppDir]}px`;
};

rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);
upArrow.addEventListener("click", moveUp);
downArrow.addEventListener("click", moveDown);
window.addEventListener("keydown", (e) => makeMove(e));
