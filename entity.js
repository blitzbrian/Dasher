class Player {
    constructor() {
        this.pos = createVector(50, height/2);
        this.vel = createVector()
    }

    update() {
        this.vel.y += 1;
        this.vel.x += 2;
        this.vel.limit(7);
        this.pos.add(this.vel);
    }

    show() {
        rectMode(CENTER);
        rect(width/3, this.pos.y, 50, 50)
    }
}