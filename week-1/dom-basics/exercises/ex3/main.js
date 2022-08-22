const container = document.getElementById("container");

const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

const changeColor = function (boxElement) {
  boxElement.style.backgroundColor = getRandomColor();
};

const addBoxes = function (numBoxes) {
  for (let i = 1; i <= numBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseenter", ({ target }) => changeColor(target));
    container.appendChild(box);
  }
};


addBoxes(9);