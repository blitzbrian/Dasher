let particleSystem, effectManager, grid, player, walk, startMillis, started, grave, graves, nojump;

function preload() {
  walk = [loadImage('player0.png'), loadImage('player1.png'), loadImage('player2.png'), loadImage('player3.png')];
  grave = loadImage('grave.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  graves = [];
  started = false;
  nojump = true;
  startMillis = millis();
  particleSystem = new ParticleSystem();
  effectManager = new EffectManager();
  grid = new Grid(100, 5);
  player = new Player();
  for (let i = 0; i < 100; i++) grid.add(i + 1, 5, new Color(42, 157, 143));
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
  graves.push(new Grave(2000));
}

function draw() {
  background('#e9c46a');
  if (player.pos.y >= height) reset();
  particleSystem.run();
  if (started) player.update();
  else startMillis = millis();
  player.show();
  grid.show();
  effectManager.show();
  graves.forEach((grave) => {
    grave.show();
    grave.update();
  });
  textSize(20);
  fill('#e76f51');
  text('Score: ' + Math.floor((millis() - startMillis) / 1000), 50, 50);
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

function mousePressed() {
  if (started && nojump) nojump = false;
  if (!started) started = true;
}

function keyPressed() {
  if (started && nojump) nojump = false;
  if (!started) started = true;
}

function reset() {
  nojump = true;
  started = false;
  startMillis = millis();
  player = new Player();
}
