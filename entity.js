class Player {
  constructor() {
    this.animationIndex = 0;
    this.pos = createVector(0, height / 3.5);
    this.vel = createVector();
    this.acc = createVector();
    this.cameraOffset = width / 6;
  }

  update() {
    this.animationIndex += 0.0075 * deltaTime;
    if (!grid.isThere(this.pos.x + this.cameraOffset, this.pos.y + 50)) this.acc.y += 0.1;
    else this.acc.y = 0;
    if (grid.isThere(this.pos.x + this.cameraOffset, this.pos.y + 50) && (keyIsDown(32) || mouseIsPressed)) this.acc.y = -7.5;
    this.vel.x += 15;
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(p5.Vector.mult(this.vel, deltaTime / 15));
  }

  show() {
    push();
    imageMode(CENTER);
    image(walk[Math.floor(this.animationIndex) % 4], this.cameraOffset, this.pos.y + 15, 50, 50);
    pop();
  }
}
