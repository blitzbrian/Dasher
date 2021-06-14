class Grid {
  constructor(rows, cols) {
    this.grid = [];
    this.rows = rows;
    this.cols = cols;
    this.gen(rows, cols);
  }
  gen(rows, cols) {
    for (let j = 0; j < rows; j++) {
      if (!this.grid[j]) this.grid[j] = [];
      for (let i = 0; i < cols; i++) {
        if (!this.grid[j][i]) this.grid[j][i] = new Block((j + 0.5) * 100, (i + 0.5) * 100);
      }
    }
  }
  show() {
    push();
    translate(-player.pos.x, height >= 500 ? 0 : height - 500);
    for (let j = 0; j < this.grid.length; j++) {
      for (let i = 0; i < this.grid[j].length; i++) {
        this.grid[j][i].render();
      }
    }
    pop();
  }

  add(row, col, color) {
    this.grid[row - 1][col - 1].color = color;
    this.grid[row - 1][col - 1].show();
  }

  remove(row, col) {
    this.grid[row - 1][col - 1].hide();
  }

  isThere(x, y) {
    try {
      return this.grid[Math.floor(x / 100)][Math.floor((y - (height <= 500 ? height - 500 : 0)) / 100)].showing;
    } catch {
      return false;
    }
  }
}

class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = new Color(0, 0, 0);
    this.showing = false;
  }

  render() {
    if (this.showing) {
      push();
      noStroke();
      fill(this.color.r, this.color.g, this.color.b);
      rectMode(CENTER);
      rect(this.x, this.y, 100);
      pop();
    }
  }

  show() {
    this.showing = true;
  }

  hide() {
    this.showing = false;
  }
}
