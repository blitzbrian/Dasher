let particleSystem, effectManager, grid, player, walk, startMillis, started, grave, graves, nojump, jump;

function preload() {
  walk = [loadImage('player0.png'), loadImage('player1.png'), loadImage('player2.png'), loadImage('player3.png')];
  grave = loadImage('grave.png');
  jump = loadImage('player4.png');
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
  grid = new Grid(1000, 5);
  player = new Player();
  let x = 20;
  for (let i = 0; i < 20; i++) grid.add(i, 5, new Color(42, 157, 143));
  while (x < 1000) {
    let gap = Math.floor(random(10, 15));
    x += gap;
    let platform = Math.floor(random(15, 30));
    for (let i = 0; i < platform; i++) grid.add(i + x, 5, new Color(42, 157, 143));
    x += platform;
    graves.push(new Grave(x * 100 - 150));
  }
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
