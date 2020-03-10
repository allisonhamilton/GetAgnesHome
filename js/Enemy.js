class Enemy2 {
  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = this.y + "px";

    this.x = this.x + timeDiff * this.speed;
    this.domElement.style.left = this.x + "px";

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
    if (this.x > GAME_WIDTH) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  }
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    this.x = -(enemySpot * ENEMY2_WIDTH);
    this.y = -ENEMY2_HEIGHT;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/enemy2.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    theRoot.append(this.domElement);

    this.speed = Math.random() + ENEMY2_SPEED;
  }
}

class Enemy {
  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = this.y + "px";

    this.x = this.x + timeDiff * this.speed;
    this.domElement.style.left = this.x + "px";

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
    if (this.x > GAME_WIDTH) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  }
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    this.x = -(enemySpot * ENEMY_WIDTH);
    this.y = -ENEMY_HEIGHT;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/enemy.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    theRoot.append(this.domElement);

    this.speed = Math.random() + ENEMY_SPEED;
  }
}
