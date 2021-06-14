let particleSystem, effectManager, grid, player, walk;

function preload() {
  walk = [loadImage('player0.png'), loadImage('player1.png'), loadImage('player2.png'), loadImage('player3.png')];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  particleSystem = new ParticleSystem();
  effectManager = new EffectManager();
  grid = new Grid(100, 5);
  player = new Player();
  for (let i = 0; i < 100; i++) grid.add(i + 1, 5, new Color(111, 88, 201));
  grid.remove(61, 5);
  grid.remove(60, 5);
  grid.remove(59, 5);
  grid.remove(58, 5);
  grid.remove(57, 5);
  grid.remove(56, 5);
  grid.remove(55, 5);
  grid.remove(54, 5);
  grid.remove(53, 5);
  grid.remove(52, 5);
  grid.remove(51, 5);
  grid.remove(50, 5);
}

function draw() {
  background(182, 184, 214);
  particleSystem.run();
  player.update();
  player.show();
  grid.show();
  effectManager.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
