let particleSystem, effectManager, grid, player, startMillis, started, graves, nojump;

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
  textSize(20);
  textAlign(CENTER, CENTER);
  fill('#e76f51');
  if (player.pos.y >= height) reset();
  particleSystem.run();
  if (started) player.update();
  else {
    text('Klik op scherm of een knop om te starten.', width / 2, height / 3);
    startMillis = millis();
  }
  player.show();
  grid.show();
  effectManager.show();
  graves.forEach((grave) => {
    grave.show();
    grave.update();
  });
  textAlign(LEFT, TOP);
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
