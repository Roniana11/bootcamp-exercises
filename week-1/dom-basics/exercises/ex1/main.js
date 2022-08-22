const ball = document.getElementById("ball");
const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");
const upArrow = document.getElementById("up");
const downArrow = document.getElementById("down");

let left_offset = 0;
let top_offset = 0;
let right_offset = 320;
let bottom_offset = 320;

//spot check 3

const makeMove = (event) => {
  event.preventDefault();
  const keyCode = event.keyCode;
  console.log(keyCode);
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
  console.log(right_offset, left_offset);
  right_offset = right_offset ? right_offset - 10 : 0;
  left_offset = left_offset === 400 ? 400 : left_offset + 10;
  ball.style.right = `${right_offset}px`;
  ball.style.left = `${left_offset}px`;
};

const moveLeft = function () {
  left_offset = left_offset ? left_offset - 10 : 0;
  right_offset = right_offset === 400 ? 400 : right_offset + 10;
  ball.style.left = `${left_offset}px`;
  ball.style.right = `${right_offset}px`;
};

const moveUp = function () {
  top_offset = top_offset ? top_offset - 10 : 0;
  bottom_offset = bottom_offset === 250? 250 : bottom_offset + 10;
  ball.style.bottom = `${bottom_offset}px`;
  ball.style.top = `${top_offset}px`;
};

const moveDown = function () {
  bottom_offset = bottom_offset ? bottom_offset - 10 : 0;
  top_offset = top_offset === 250 ? 250: top_offset + 10;
  ball.style.top = `${top_offset}px`;
  ball.style.bottom = `${bottom_offset}px`;
};

rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);
upArrow.addEventListener("click", moveUp);
downArrow.addEventListener("click", moveDown);
window.addEventListener("keydown", (e) => makeMove(e));

//spot check 4
/* const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "I am a sub header";
subHeader.classList.add("sub-header");
document.body.appendChild(subHeader); */
