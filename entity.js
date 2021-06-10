class Player {
    constructor() {
        this.pos = createVector(0, height/2);
        this.vel = createVector();
        this.acc = createVector();
        this.cameraOffset = width/6
    }

    update() {
        if(!grid.isThere(this.pos.x + this.cameraOffset, this.pos.y + 50)) this.acc.y += 0.1; else this.acc.y = 0;
        if(grid.isThere(this.pos.x + this.cameraOffset, this.pos.y + 50) && keyIsDown(32)) this.acc.y =  -7.5;
        this.vel.x += 15;
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
    }

    show() {
        push();
        noStroke();
        fill(189, 237, 224);
        rectMode(CENTER);
        rect(this.cameraOffset, this.pos.y + 15, 50, 50);
        pop();
    }
}