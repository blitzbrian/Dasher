class Player {
  constructor() {
    this.animationIndex = 0;
    this.pos = createVector(0, height >= 500 ? 355 : height - 145);
    this.vel = createVector();
    this.acc = createVector();
  }

  update() {
    this.cameraOffset = width / 6;
    this.animationIndex += 0.01 * deltaTime;
    if (!grid.isThere(this.pos.x + this.cameraOffset, this.pos.y + 50)) this.acc.y += 0.005 * deltaTime;
    else {
      this.jumping = false;
      this.acc.y = 0;
    }
    if (!nojump && grid.isThere(this.pos.x + this.cameraOffset, this.pos.y + 50) && (keyIsDown(32) || mouseIsPressed)) {
      this.acc.y = -7.5;
      this.jumping = true;
    }
    this.vel.x += 15;
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(p5.Vector.mult(this.vel, deltaTime / 15));
  }

  show() {
    push();
    rectMode(CENTER);
    rect(width / 6, this.pos.y + 20, 50, 50);
    pop();
  }
}

class Grave {
  constructor(x) {
    this.pos = createVector(x, 350);
  }

  update() {
    if (dist(this.pos.x - 200, this.pos.y, player.pos.x, player.pos.y) <= 100) reset();
  }

  show() {
    push();
    translate(-player.pos.x, height >= 500 ? 0 : height - 500);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 50, 100);
    pop();
  }
}
