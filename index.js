const DODGER = document.getElementById("dodger");
const GAME_WIDTH = 400; // Width of the game field
const DODGER_WIDTH = 40; // Width of the dodger element

function moveDodgerLeft() {
  const left = positionToInteger(DODGER.style.left);
  if (left > 0) {
    DODGER.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = positionToInteger(DODGER.style.left);
  if (left < (GAME_WIDTH - DODGER_WIDTH)) {
    DODGER.style.left = `${left + 1}px`;
  }
}

function positionToInteger(position) {
  return parseInt(position.split('px')[0]) || 0;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
