let gameEngine = new Engine(document.getElementById("app"));
let keydownHandler = event => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
  if (event.code === "ArrowUp") {
    gameEngine.player.moveUp();
  }
  if (event.code === "ArrowDown") {
    gameEngine.player.moveDown();
  }
};
setInterval(() => {
  MAX_ENEMIES = MAX_ENEMIES + 1;
  if (MAX_ENEMIES === 5) {
    return clearInterval();
  }
}, 10000);
setInterval(() => {
  ENEMY_SPEED = ENEMY_SPEED + 0.5;
}, 1000);
document.addEventListener("keydown", keydownHandler);
gameEngine.gameLoop();
