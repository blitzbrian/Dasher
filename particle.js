class Particle {
  constructor(x, y, xSpeed, ySpeed, color, size, time) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = color;
    this.size = size;
    this.removed = false;
    this.startMillis = millis();
    this.milis = time * 1000;
    this.alpha = 255;
  }
  show() {
    noStroke();
    fill(this.color.r, this.color.g, this.color.b, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
  update() {
    this.alpha -= (this.alpha / (this.milis / 10)) * (deltaTime / 10);
    this.x += this.xSpeed * (deltaTime / 20);
    this.y += this.ySpeed * (deltaTime / 20);
    if ((this.x > width || this.x < 0) && (this.y > height || this.y < 0)) {
      this.removed = true;
    }
  }
}

class ParticleSystem {
  constructor() {
    this.particles = [];
  }
  run() {
    for (let i = 0; i < this.particles.length; i++) {
      let particle = this.particles[i];
      particle.update();
      particle.show();
    }
    if (this.particles.length > 100) this.particles.splice(0, 10);
  }
  add(x, y, xSpeed, ySpeed, color, size, time) {
    this.particles.push(new Particle(x, y, xSpeed, ySpeed, color, size, time));
  }
}

class EffectManager {
  constructor() {
    this.shakingAmount = 0;
    this.shakingMilis = 0;
  }

  show() {
    let x = random(-this.shakingAmount, this.shakingAmount);
    let y = random(-this.shakingAmount, this.shakingAmount);
    translate(x, y);
    this.shakingAmount -=
      (this.shakingAmount / (this.shakingMilis / 10)) * (deltaTime / 20);
  }

  shake(milis, amount) {
    this.shakingAmount = amount;
    this.shakingMilis = milis;
  }

  glitch(x, y, x2, y2) {}
}
