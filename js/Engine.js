let musicOn = new Audio(
  "/Users/allison/decode/allisonworkshop/OOP Nyan Cat/sound/music.mp3"
);
class Engine {
  gameLoop = () => {
    musicOn.play();
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });
    while (this.enemies.length < MAX_ENEMIES) {
      let spot = nextEnemySpot(this.enemies);
      let whichEnemy = Math.random();
      if (whichEnemy > 0.5) {
        this.enemies.push(new Enemy(this.root, spot));
      }
      if (whichEnemy < 0.5) {
        this.enemies.push(new Enemy2(this.root, spot));
      }
    }

    this.score = this.score + 1;
    this.scoreDisplay.update("SCORE: " + this.score);

    if (this.player.y === 0) {
      window.alert("You got Agnes home! You win! Your Score is: " + this.score);
    }

    if (this.isPlayerDead()) {
      window.alert("GAME OVER!! YOUR SCORE IS: " + this.score);
      return;
    }
    setTimeout(this.gameLoop, 20);
  };
  isPlayerDead = () => {
    for (let i = 0; i < this.enemies.length; i++) {
      if (
        this.player.x < this.enemies[i].x + ENEMY_WIDTH &&
        this.player.x + PLAYER_WIDTH > this.enemies[i].x &&
        this.player.y < this.enemies[i].y + ENEMY_HEIGHT &&
        this.player.y + PLAYER_HEIGHT > this.enemies[i].y
      ) {
        return true;
      }
    }
  };
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    this.score = 0;
    this.explanation = 0;
    this.scoreDisplay = new Text(this.root, 350, 700);
    this.scoreDisplay.update("SCORE: " + this.score);
    this.explanation = new Text(this.root, 525, 20);
    this.explanation.update(
      "Help poor Agnes get home! She lives just above the top of the page. Be careful! She gets easily distracted by her friend Fran and wine!"
    );
    addBackground(this.root);
  }
}
